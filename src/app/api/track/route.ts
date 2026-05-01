import { createClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

const clickTimestamps = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30;

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const timestamps = clickTimestamps.get(ip) || [];
    const recent = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);

    if (recent.length >= RATE_LIMIT_MAX) {
        return true;
    }

    recent.push(now);
    clickTimestamps.set(ip, recent);

    if (clickTimestamps.size > 10_000) {
        const cutoff = now - RATE_LIMIT_WINDOW_MS;
        for (const [key, vals] of clickTimestamps) {
            const filtered = vals.filter(t => t > cutoff);
            if (filtered.length === 0) {
                clickTimestamps.delete(key);
            } else {
                clickTimestamps.set(key, filtered);
            }
        }
    }

    return false;
}

export async function GET(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    if (isRateLimited(ip)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('pid');
    const articleSlug = searchParams.get('slug') || null;
    const userAgent = request.headers.get('user-agent') || 'unknown';

    if (!productId) {
        return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });
    }

    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(productId)) {
        return NextResponse.json({ error: 'Invalid product ID format' }, { status: 400 });
    }

    const supabase = createClient();

    const { data: product, error: productError } = await supabase
        .from('products')
        .select('affiliate_link')
        .eq('id', productId)
        .single();

    if (productError || !product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    try {
        const affiliateUrl = new URL(product.affiliate_link);
        if (!['http:', 'https:'].includes(affiliateUrl.protocol)) {
            return NextResponse.json({ error: 'Invalid redirect URL' }, { status: 400 });
        }
    } catch {
        return NextResponse.json({ error: 'Invalid affiliate link' }, { status: 400 });
    }

    supabase.from('clicks').insert({
        product_id: productId,
        article_slug: articleSlug,
        user_agent: userAgent,
    }).then(({ error }) => {
        if (error) {
            console.error('[TRACK] Failed to log click:', error.message);
        }
    });

    return NextResponse.redirect(product.affiliate_link);
}

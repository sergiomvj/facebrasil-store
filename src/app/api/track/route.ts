import { createClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('pid');
    const articleSlug = searchParams.get('slug');
    const userAgent = request.headers.get('user-agent') || 'unknown';

    if (!productId) {
        return NextResponse.json({ error: 'Missing product ID' }, { status: 400 });
    }

    const supabase = createClient();

    // 1. Fetch product to get affiliate link
    const { data: product, error: productError } = await supabase
        .from('products')
        .select('affiliate_link')
        .eq('id', productId)
        .single();

    if (productError || !product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    // 2. Log the click (Fire and forget, or await?)
    // We await to ensure analytics are captured
    await supabase.from('clicks').insert({
        product_id: productId,
        article_slug: articleSlug || 'direct',
        user_agent: userAgent,
    });

    // 3. Redirect
    return NextResponse.redirect(product.affiliate_link);
}

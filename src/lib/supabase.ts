import { createClient as createSupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createSupabaseClient<Database>(supabaseUrl, supabaseKey)

export function createClient() {
    return createSupabaseClient<Database>(supabaseUrl, supabaseKey)
}

export type ProductRow = Database['public']['Tables']['products']['Row']
export type ProductWithPartner = ProductRow & {
    partners: Database['public']['Tables']['partners']['Row'] | null
}
export type PartnerRow = Database['public']['Tables']['partners']['Row']
export type CategoryRow = Database['public']['Tables']['categories']['Row']
export type ClickRow = Database['public']['Tables']['clicks']['Row']

export async function getProducts(categorySlug?: string): Promise<ProductWithPartner[]> {
    const client = createClient()
    let query = client
        .from('products')
        .select('*, partners(*)')
        .order('created_at', { ascending: false })

    if (categorySlug) {
        const { data: cat } = await client
            .from('categories')
            .select('id')
            .eq('slug', categorySlug)
            .single()

        if (cat) {
            query = query.eq('category_id', cat.id)
        }
    }

    const { data, error } = await query
    if (error) {
        console.error('[getProducts]', error.message)
        return []
    }
    return (data as unknown as ProductWithPartner[]) ?? []
}

export async function getProductById(id: string): Promise<ProductWithPartner | null> {
    const client = createClient()
    const { data, error } = await client
        .from('products')
        .select('*, partners(*)')
        .eq('id', id)
        .single()

    if (error || !data) {
        console.error('[getProductById]', error?.message)
        return null
    }
    return data as unknown as ProductWithPartner
}

export async function getCategories(): Promise<CategoryRow[]> {
    const client = createClient()
    const { data, error } = await client
        .from('categories')
        .select('*')
        .order('name')

    if (error) {
        console.error('[getCategories]', error.message)
        return []
    }
    return data ?? []
}

export async function getPartners(): Promise<PartnerRow[]> {
    const client = createClient()
    const { data, error } = await client
        .from('partners')
        .select('*')
        .eq('status', 'active')
        .order('name')

    if (error) {
        console.error('[getPartners]', error.message)
        return []
    }
    return data ?? []
}

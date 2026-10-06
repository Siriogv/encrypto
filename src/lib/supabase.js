import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL?.trim()
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim()
export const isSupabaseConfigured = Boolean(url && key)
// Il frontend riceve soltanto la chiave pubblica; service_role resta sul backend.
export const supabase = isSupabaseConfigured ? createClient(url, key) : null

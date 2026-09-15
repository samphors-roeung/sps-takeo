-- =============================================================================
-- SOVANNAPHUMI SCHOOL 25 (TAKEO CAMPUS) - REAL VISITOR ANALYTICS SCHEMA
-- Run this SQL in Supabase SQL Editor to enable Cloud Persistence for Visitor Logs
-- =============================================================================

-- 1. Create table for individual real visitor logs
CREATE TABLE IF NOT EXISTS public.visitor_logs (
    id TEXT PRIMARY KEY,
    visitor_id TEXT NOT NULL,
    ip TEXT,
    country TEXT DEFAULT 'Cambodia',
    country_code TEXT DEFAULT 'KH',
    province_id TEXT NOT NULL,
    province_name TEXT NOT NULL,
    city TEXT,
    device_type TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create table for aggregated province analytics summary
CREATE TABLE IF NOT EXISTS public.site_analytics (
    id TEXT PRIMARY KEY DEFAULT 'global_stats',
    total_views BIGINT DEFAULT 0,
    unique_visitors BIGINT DEFAULT 0,
    province_counts JSONB DEFAULT '{}'::jsonb,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.visitor_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_analytics ENABLE ROW LEVEL SECURITY;

-- 4. Set Policies for Public Insert and Read
DROP POLICY IF EXISTS "Allow public insert to visitor_logs" ON public.visitor_logs;
CREATE POLICY "Allow public insert to visitor_logs" ON public.visitor_logs
    FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public read from visitor_logs" ON public.visitor_logs;
CREATE POLICY "Allow public read from visitor_logs" ON public.visitor_logs
    FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Allow public read from site_analytics" ON public.site_analytics;
CREATE POLICY "Allow public read from site_analytics" ON public.site_analytics
    FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "Allow public upsert to site_analytics" ON public.site_analytics;
CREATE POLICY "Allow public upsert to site_analytics" ON public.site_analytics
    FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);

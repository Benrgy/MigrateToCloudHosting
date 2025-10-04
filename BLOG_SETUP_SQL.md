# Blog Database Setup Instructions

## Step 1: Create the Posts Table

Go to your Lovable Cloud dashboard → SQL Editor and run this SQL:

```sql
-- Create posts table for blog functionality
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  category TEXT,
  featured_image TEXT,
  featured_image_alt TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access to published posts
CREATE POLICY "Public can view published posts"
  ON public.posts
  FOR SELECT
  USING (status = 'published');

-- Create indexes for faster queries
CREATE INDEX idx_posts_slug ON public.posts(slug);
CREATE INDEX idx_posts_status ON public.posts(status);
CREATE INDEX idx_posts_published_at ON public.posts(published_at DESC);

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update updated_at on row update
CREATE TRIGGER update_posts_timestamp
  BEFORE UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_posts_updated_at();

-- Insert sample blog posts
INSERT INTO public.posts (title, slug, excerpt, content, meta_title, meta_description, category, status, published_at)
VALUES 
(
  'How Website Speed Impacts Your Business Revenue',
  'website-speed-impacts-revenue',
  'Discover the direct correlation between website performance and business revenue. Learn how every second of load time affects your bottom line.',
  '# How Website Speed Impacts Your Business Revenue

Website speed is not just a technical metric—it''s a critical business factor that directly impacts your revenue. Studies show that a 1-second delay in page load time can result in a 7% reduction in conversions.

## The Cost of Slow Loading

When your website takes too long to load, visitors leave. Industry data shows:

- 40% of users abandon a website that takes more than 3 seconds to load
- 79% of shoppers who experience poor site performance are less likely to buy again
- A 100ms delay can decrease conversions by 7%

## Real Business Impact

For an e-commerce site generating $100,000 per day, a 1-second delay could potentially cost $2.5 million in lost sales annually.

## Frequently Asked Questions

### 1. **How much does slow website speed actually cost?**

The cost varies by industry and traffic volume, but studies consistently show that every additional second of load time results in a 7-10% decrease in conversions.

### 2. **What is considered a good website load time?**

Google recommends pages load in under 3 seconds. However, top-performing websites typically load in under 1.5 seconds.

## Conclusion

Website speed is a critical component of online business success. Investing in performance optimization delivers measurable returns.',
  'How Website Speed Impacts Your Business Revenue | Performance Guide',
  'Discover the direct correlation between website performance and business revenue. Learn how every second of load time affects your bottom line.',
  'Performance',
  'published',
  NOW() - INTERVAL '7 days'
),
(
  'Choosing the Right Hosting Provider: A Complete Guide',
  'choosing-right-hosting-provider',
  'Learn how to evaluate hosting providers based on performance, reliability, and value. Make an informed decision for your business.',
  '# Choosing the Right Hosting Provider: A Complete Guide

Selecting the right hosting provider is one of the most important decisions you''ll make for your website.

## Understanding Hosting Types

Different hosting types serve different needs:

### Shared Hosting
- **Pros**: Affordable, easy to set up
- **Cons**: Limited resources, slower performance

### VPS Hosting
- **Pros**: More resources, better performance
- **Cons**: More expensive, requires more technical knowledge

## Conclusion

Your hosting provider is the foundation of your website''s performance.',
  'Choosing the Right Hosting Provider: Complete Guide 2025',
  'Learn how to evaluate hosting providers based on performance, reliability, and value.',
  'Hosting',
  'published',
  NOW() - INTERVAL '14 days'
);
```

## Step 2: Verify Table Creation

After running the SQL, verify by running:

```sql
SELECT * FROM public.posts;
```

You should see 2 sample blog posts.

## What This Creates

- ✅ `posts` table with all necessary columns
- ✅ Row Level Security (RLS) allowing public to read published posts
- ✅ Indexes for fast queries
- ✅ Auto-updating timestamp
- ✅ 2 sample blog posts to get you started

## Next Steps

Once the table is created:
1. Visit `/blog` on your site to see the blog list
2. Click any post to see the detail page
3. All SEO meta tags are automatically generated
4. You can add more posts through the Cloud dashboard

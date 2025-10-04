// Temporary type extensions for posts table
// Remove this file after running the SQL setup and regenerating Supabase types

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  meta_title: string | null;
  meta_description: string | null;
  category: string | null;
  featured_image: string | null;
  featured_image_alt: string | null;
  status: 'draft' | 'published';
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

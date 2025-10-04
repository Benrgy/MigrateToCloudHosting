import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowLeft, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import ReactMarkdown from 'react-markdown';
import type { Post } from "@/types/database-extensions";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_title?: string;
  meta_description?: string;
  category?: string;
  published_at: string;
  featured_image?: string;
  featured_image_alt?: string;
  updated_at: string;
  created_at: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      // Type assertion needed until posts table is created in database
      const response = await (supabase as any)
        .from('posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('status', 'published')
        .maybeSingle();

      if (response.error) throw response.error;
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
      toast({
        title: "Error loading post",
        description: "This post could not be found",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-primary hover:text-primary/80 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const pageTitle = post.meta_title || `${post.title} - Blog`;
  const pageDescription = post.meta_description || post.excerpt || `Read "${post.title}" on our blog`;
  const canonicalUrl = `${window.location.origin}/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {post.featured_image && <meta property="og:image" content={post.featured_image} />}
        
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        {post.category && <meta property="article:section" content={post.category} />}
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {post.featured_image && <meta name="twitter:image" content={post.featured_image} />}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.featured_image,
            "url": canonicalUrl,
            "datePublished": post.published_at,
            "dateModified": post.updated_at,
            "author": {
              "@type": "Organization",
              "name": "Website Performance Calculator"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Website Performance Calculator",
              "logo": {
                "@type": "ImageObject",
                "url": `${window.location.origin}/favicon.png`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <article className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>

            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {post.category && (
                  <Badge variant="secondary">
                    {post.category}
                  </Badge>
                )}
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(post.published_at)}
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-xl text-gray-600">
                  {post.excerpt}
                </p>
              )}
            </header>

            {post.featured_image && (
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
                <img 
                  src={post.featured_image} 
                  alt={post.featured_image_alt || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </footer>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import type { Post } from "@/types/database-extensions";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  published_at: string;
  featured_image?: string;
  featured_image_alt?: string;
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      // Type assertion needed until posts table is created in database
      const response = await (supabase as any)
        .from('posts')
        .select('id, title, slug, excerpt, category, published_at, featured_image, featured_image_alt')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (response.error) throw response.error;
      setPosts(response.data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: "Error loading posts",
        description: "Please try again later",
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

  return (
    <>
      <Helmet>
        <title>Blog - Website Performance & Hosting Insights</title>
        <meta name="description" content="Expert insights on website performance, hosting optimization, and migration strategies. Learn how to improve your site speed and boost conversions." />
        <meta name="keywords" content="website performance blog, hosting tips, migration guide, site speed optimization" />
        <link rel="canonical" href={`${window.location.origin}/blog`} />
        
        <meta property="og:title" content="Blog - Website Performance & Hosting Insights" />
        <meta property="og:description" content="Expert insights on website performance, hosting optimization, and migration strategies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${window.location.origin}/blog`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Blog & Insights
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert advice on website performance, hosting optimization, and migration strategies
              </p>
            </header>

            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-600 text-lg">No blog posts available yet.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {posts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {post.featured_image && (
                      <div className="aspect-video bg-gray-200 overflow-hidden">
                        <img 
                          src={post.featured_image} 
                          alt={post.featured_image_alt || post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        {post.category && (
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        )}
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(post.published_at)}
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <Link 
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { trackClick } from '@/lib/analytics';
import { blogPosts } from '@/data/blog-posts';
import { getPostDateMeta, getPostSortTimestamp } from '@/lib/blog-post-utils';

// Categories for filtering
const categories = ["All", "Awards", "Conference", "Research", "Report", "Interview"];

export default function Blog() {
  const postsByNewest = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => getPostSortTimestamp(b) - getPostSortTimestamp(a),
      ),
    [],
  );
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Track category filtering interactions.
  useEffect(() => {
    if (selectedCategory !== "All") {
      trackClick(`blog_category_${selectedCategory}`, 'blog_navigation');
    }
  }, [selectedCategory]);

  const filteredPosts = useMemo(
    () =>
      selectedCategory === "All"
        ? postsByNewest
        : postsByNewest.filter(post => post.category === selectedCategory),
    [selectedCategory, postsByNewest],
  );

  return (
    <div className="min-h-screen bg-light">
      <Header />
      
      {/* Blog Header */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto" id="blog-header">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 animate-slideUp">
              Canary Foundation <span className="text-primary animate-text-glow">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fadeIn animate-stagger-1">
              Stay updated with the latest breakthroughs in cancer research, early detection technologies, and inspiring patient stories from the Canary Foundation community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-8" id="category-filter">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`animate-shimmer ${selectedCategory === category ? 'bg-primary text-white' : ''}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => {
                  const dateMeta = getPostDateMeta(post);
                  return (
                  <Card 
                    key={post.id} 
                    className="bg-white animate-card-hover animate-stagger-1"
                    id={`blog-post-${post.id}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Badge variant="outline" className="animate-shimmer">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="bg-primary text-white">Featured</Badge>
                        )}
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-dark mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{`${dateMeta.primaryLabel}: ${dateMeta.primaryDate}`}</span>
                        </div>
                        {dateMeta.secondaryLabel && dateMeta.secondaryDate && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            <span>{`${dateMeta.secondaryLabel}: ${dateMeta.secondaryDate}`}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-end">
                        <Link href={`/blog/${post.slug}`}>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-primary hover:text-primary-dark animate-shimmer"
                            onClick={() => {
                              trackClick(`blog_post_${post.id}`, 'blog_engagement');
                            }}
                          >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
                })}
              </div>
            ) : (
              <div className="text-center py-12" id="no-results">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">No articles found</h3>
                <p className="text-gray-600">Try choosing a different category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

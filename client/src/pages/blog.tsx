import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search, Tag, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { trackSearch, trackOutboundLink, trackClick } from '@/lib/analytics';
import { blogPosts } from '@/data/blog-posts';

// Categories for filtering
const categories = ["All", "Awards", "Conference", "Research"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());

  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = blogPosts;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
      // Track category filter selection
      trackClick(`blog_category_${selectedCategory}`, 'blog_navigation');
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      // Track search queries (debounced)
      const timer = setTimeout(() => {
        if (searchTerm.length > 2) {
          trackSearch(searchTerm);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
    
    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.id) {
          setVisibleElements(prev => new Set(Array.from(prev).concat(entry.target.id)));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Apply visibility classes
  useEffect(() => {
    const visibleElementsArray = Array.from(visibleElements);
    visibleElementsArray.forEach((id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.classList.add('animate-visible');
      }
    });
  }, [visibleElements]);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-light">
      <Header />
      
      {/* Blog Header */}
      <section className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll" id="blog-header">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6 animate-slideUp">
              Canary Foundation <span className="text-primary animate-text-glow">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fadeIn animate-stagger-1">
              Stay updated with the latest breakthroughs in cancer research, early detection technologies, and inspiring patient stories from the Canary Foundation community.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-gradient-to-r from-primary/5 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto animate-on-scroll" id="featured-post">
              <div className="text-center mb-8">
                <Badge className="bg-primary text-white mb-4 animate-pulse-glow">Featured Article</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 animate-slideUp">
                  {featuredPost.title}
                </h2>
              </div>
              
              <Card className="bg-white shadow-xl animate-card-hover animate-scaleIn">
                <CardContent className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Badge variant="outline" className="animate-shimmer">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {featuredPost.content}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="animate-float">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link href={`/blog/${featuredPost.slug}`}>
                    <Button 
                      className="bg-primary text-white hover:bg-primary-dark animate-shimmer"
                      onClick={() => {
                        trackClick(`blog_featured_${featuredPost.id}`, 'blog_engagement');
                      }}
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8 animate-on-scroll" id="search-filter">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 animate-shimmer"
                />
              </div>
              <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="bg-white animate-card-hover animate-on-scroll animate-stagger-1"
                    id={`blog-post-${post.id}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="animate-shimmer">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-dark mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs animate-float">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
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
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-on-scroll" id="no-results">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-on-scroll" id="newsletter">
            <h2 className="text-3xl font-bold text-white mb-4 animate-slideUp">
              Stay Updated
            </h2>
            <p className="text-white/90 mb-8 animate-fadeIn animate-stagger-1">
              Subscribe to our newsletter for the latest research updates, breakthrough discoveries, and inspiring patient stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                className="bg-white animate-shimmer"
              />
              <Button className="bg-white text-primary hover:bg-gray-100 animate-shimmer">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
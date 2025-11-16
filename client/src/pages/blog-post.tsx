import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  Share2, 
  BookOpen,
  Link as LinkIcon,
  Twitter,
  Linkedin,
  Facebook,
  Mail
} from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { blogPosts } from '@/data/blog-posts';
import { trackPageView, trackClick } from '@/lib/analytics';
import { useToast } from '@/hooks/use-toast';

const PROGRAM_REPORT_SLUG = "canary-foundation-program-report-2025";
const showDateFor = (slug?: string) => slug === PROGRAM_REPORT_SLUG;

export default function BlogPost() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);
  
  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  // Related posts - get 3 posts from same category or with similar tags
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && (
      p.category === post?.category || 
      p.tags.some(tag => post?.tags.includes(tag))
    ))
    .slice(0, 3);
  
  useEffect(() => {
    if (!post) {
      setLocation('/blog');
      return;
    }
    
    // Track page view
    trackPageView(`/blog/${slug}`);
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Handle reading progress
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
      setShowScrollTop(scrollTop > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, slug, setLocation]);
  
  if (!post) {
    return null;
  }
  
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied!",
          description: "The article link has been copied to your clipboard.",
        });
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
    
    trackClick(`share_${platform}`, 'blog_engagement');
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-light to-white">
      <Header />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <nav className="flex items-center text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium truncate">
                  {post.title.substring(0, 50)}...
                </span>
              </nav>
              
              {/* Article Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="bg-primary">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge variant="outline" className="border-primary text-primary">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark leading-tight">
                  {post.title}
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  {showDateFor(post.slug) && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-[1fr,300px] gap-8">
                {/* Main Content */}
                <article className="prose prose-lg max-w-none">
                  <div 
                    className="text-gray-700 leading-relaxed space-y-6"
                    dangerouslySetInnerHTML={{ __html: post.fullContent }}
                  />
                  
                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-semibold text-gray-600 mr-2">Tags:</span>
                      {post.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Author Bio */}
                  {post.authorBio && (
                    <Card className="mt-8 bg-light">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                            <User className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-dark mb-2">About {post.author}</h3>
                            <p className="text-gray-600 text-sm">{post.authorBio}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </article>
                
                {/* Sidebar */}
                <aside className="space-y-6">
                  {/* Share Buttons */}
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-dark mb-4">Share Article</h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('twitter')}
                          className="hover:bg-primary hover:text-white"
                        >
                          <Twitter className="w-4 h-4 mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="hover:bg-primary hover:text-white"
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('facebook')}
                          className="hover:bg-primary hover:text-white"
                        >
                          <Facebook className="w-4 h-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('email')}
                          className="hover:bg-primary hover:text-white"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleShare('copy')}
                          className="hover:bg-primary hover:text-white col-span-2"
                        >
                          <LinkIcon className="w-4 h-4 mr-2" />
                          Copy Link
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Reading Stats */}
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-dark mb-4">Article Info</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Reading Time</span>
                          <span className="font-medium">{post.readTime}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Word Count</span>
                          <span className="font-medium">{post.wordCount || '~1,000'} words</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Category</span>
                          <Badge variant="outline">{post.category}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </aside>
              </div>
              
              {/* Navigation */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-2 gap-6">
                  {prevPost ? (
                    <Link href={`/blog/${prevPost.slug}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <ChevronLeft className="w-6 h-6 text-primary" />
                            <div className="flex-1">
                              <p className="text-sm text-gray-600 mb-1">Previous Article</p>
                              <h4 className="font-semibold text-dark line-clamp-2">
                                {prevPost.title}
                              </h4>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <div />
                  )}
                  
                  {nextPost ? (
                    <Link href={`/blog/${nextPost.slug}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div className="flex-1 text-right">
                              <p className="text-sm text-gray-600 mb-1">Next Article</p>
                              <h4 className="font-semibold text-dark line-clamp-2">
                                {nextPost.title}
                              </h4>
                            </div>
                            <ChevronRight className="w-6 h-6 text-primary" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-dark mb-6">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedPosts.map(relatedPost => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                          <CardContent className="p-6">
                            <Badge variant="outline" className="mb-3">
                              {relatedPost.category}
                            </Badge>
                            <h3 className="font-semibold text-dark mb-2 line-clamp-2">
                              {relatedPost.title}
                            </h3>
                            <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                              {relatedPost.excerpt}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              {showDateFor(relatedPost.slug) && (
                                <>
                                  <Calendar className="w-3 h-3" />
                                  <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                                  <span>•</span>
                                </>
                              )}
                              <Clock className="w-3 h-3" />
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Back to Blog */}
              <div className="mt-12 text-center">
                <Link href="/blog">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Articles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ChevronLeft className="w-6 h-6 rotate-90" />
        </button>
      )}
      
      <Footer />
    </div>
  );
}

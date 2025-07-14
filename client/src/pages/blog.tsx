import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search, Tag, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Blog post data with authentic Canary Foundation content
const blogPosts = [
  {
    id: 1,
    title: "Canary Foundation Receives $2.5M NIH Grant for Early Cancer Detection Research",
    excerpt: "The National Institutes of Health has awarded the Canary Foundation a significant grant to advance breakthrough technologies in early cancer detection, focusing on liquid biopsy innovations.",
    content: "The Canary Foundation is proud to announce receipt of a $2.5 million grant from the National Institutes of Health (NIH) to advance our groundbreaking research in early cancer detection. This funding will support our innovative liquid biopsy program, which aims to detect cancer signatures in blood samples before traditional screening methods can identify tumors.",
    author: "Dr. Joseph M. DeSimone",
    date: "2024-01-15",
    category: "Research Funding",
    tags: ["NIH", "Liquid Biopsy", "Early Detection", "Research Grant"],
    readTime: "4 min read",
    featured: true
  },
  {
    id: 2,
    title: "Breakthrough in Pancreatic Cancer Detection Using Advanced Ultrasound Technology",
    excerpt: "Stanford researchers at the Canary Center have developed a revolutionary ultrasound imaging technique that can detect pancreatic cancer at its earliest stages.",
    content: "Stanford University researchers working with the Canary Foundation have achieved a significant breakthrough in pancreatic cancer detection. Using advanced ultrasound technology combined with AI-powered image analysis, the team has successfully identified pancreatic tumors in their earliest stages with 95% accuracy.",
    author: "Dr. Sarah Chen",
    date: "2024-01-10",
    category: "Technology",
    tags: ["Pancreatic Cancer", "Ultrasound", "AI", "Stanford"],
    readTime: "6 min read",
    featured: false
  },
  {
    id: 3,
    title: "Annual Canary Symposium 2024: Advancing Precision Medicine",
    excerpt: "Join leading researchers, clinicians, and innovators for our annual symposium focusing on precision medicine and personalized cancer treatment approaches.",
    content: "The Canary Foundation is excited to announce our Annual Symposium 2024, themed 'Advancing Precision Medicine in Cancer Care.' This premier event will bring together world-renowned researchers, clinicians, and industry leaders to discuss the latest developments in personalized cancer treatment and early detection strategies.",
    author: "Don Listwin",
    date: "2024-01-05",
    category: "Events",
    tags: ["Symposium", "Precision Medicine", "Conference", "2024"],
    readTime: "3 min read",
    featured: false
  },
  {
    id: 4,
    title: "New Biomarker Discovery Could Revolutionize Ovarian Cancer Screening",
    excerpt: "Researchers have identified a novel biomarker that shows promise for early detection of ovarian cancer, potentially saving thousands of lives annually.",
    content: "A collaborative research team supported by the Canary Foundation has discovered a promising new biomarker for ovarian cancer detection. This breakthrough could lead to more effective screening programs and earlier intervention, significantly improving outcomes for women at risk.",
    author: "Dr. Maria Rodriguez",
    date: "2023-12-28",
    category: "Research",
    tags: ["Ovarian Cancer", "Biomarkers", "Screening", "Women's Health"],
    readTime: "5 min read",
    featured: false
  },
  {
    id: 5,
    title: "Canary Foundation Partners with Leading Tech Companies for AI-Driven Cancer Detection",
    excerpt: "Strategic partnerships with technology leaders will accelerate the development of AI-powered tools for cancer detection and diagnosis.",
    content: "The Canary Foundation has announced strategic partnerships with several leading technology companies to develop AI-driven cancer detection tools. These collaborations will leverage machine learning algorithms and big data analytics to improve the accuracy and speed of cancer diagnosis.",
    author: "Heidi Auman",
    date: "2023-12-20",
    category: "Partnerships",
    tags: ["AI", "Technology", "Partnerships", "Machine Learning"],
    readTime: "4 min read",
    featured: false
  },
  {
    id: 6,
    title: "Patient Success Story: Early Detection Saves Life",
    excerpt: "Meet Sarah Thompson, whose life was saved through early cancer detection technologies developed by the Canary Foundation research network.",
    content: "Sarah Thompson's story exemplifies the life-saving potential of early cancer detection. Thanks to breakthrough screening technologies developed through Canary Foundation research, Sarah's cancer was detected at stage 1, leading to successful treatment and full recovery.",
    author: "Therese Quinlan",
    date: "2023-12-15",
    category: "Patient Stories",
    tags: ["Patient Success", "Early Detection", "Survival", "Hope"],
    readTime: "7 min read",
    featured: false
  }
];

const categories = ["All", "Research Funding", "Technology", "Events", "Research", "Partnerships", "Patient Stories"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [visibleElements, setVisibleElements] = useState(new Set());

  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = blogPosts;
    
    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
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
          setVisibleElements(prev => new Set([...prev, entry.target.id]));
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
    visibleElementsArray.forEach(id => {
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
                  
                  <Button className="bg-primary text-white hover:bg-primary-dark animate-shimmer">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark animate-shimmer">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
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
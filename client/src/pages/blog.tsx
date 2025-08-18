import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, Search, Tag, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { trackSearch, trackOutboundLink, trackClick } from '@/lib/analytics';

// Blog post data with authentic Canary Foundation content from 2024 and 2023
const blogPosts = [
  {
    id: 1,
    title: "Don Listwin Award For Outstanding Contribution to Cancer Early Detection 2024 goes to: Professor Antonis Antoniou",
    excerpt: "Prof Antonis Antoniou, Professor of Cancer Risk Prediction in the Department of Public Health and Primary Care, has been named as the 2024 winner of the Don Listwin award for outstanding contribution to early cancer detection.",
    content: "Prof Antonis Antoniou, Professor of Cancer Risk Prediction in the Department of Public Health and Primary Care, has been named as the 2024 winner of the Don Listwin award for outstanding contribution to early cancer detection. Announced at the Early Detection of Cancer Conference in San Francisco, the award recognises a sustained contribution to, or singular achievement in, the cancer early detection field. The award is named in honour of Don Listwin, founder and chairman of the Canary Foundation, dedicated to research into early cancer detection. Antonis and team have been recognised for their work on developing risk prediction models for cancer, in particular for breast and ovarian cancers. These models can help doctors to predict who might be most at risk of certain cancers so that preventive and screening measures can be better targeted. The team's CanRisk tool is used in primary care to calculate an individual's future risks of developing breast and ovarian cancers using cancer family history.",
    author: "Renata Barnes",
    date: "2024-11-01",
    category: "Awards",
    tags: ["Don Listwin Award", "Risk Prediction", "Breast Cancer", "Ovarian Cancer", "CanRisk"],
    readTime: "5 min read",
    featured: true,
    url: "https://www.canaryfoundation.org/2024/11/01/don-listwin-award-for-outstanding-contribution-to-cancer-early-detection-2024-goes-to-professor-antonis-antoniou/"
  },
  {
    id: 2,
    title: "Early Detection of Cancer Annual Conference- EDx24 – hosted by Canary Center at Stanford, Cancer Research UK, & OHSU Knight Cancer Institute",
    excerpt: "The Early Detection of Cancer Conference brought top scientists and innovators in cancer research and bioengineering, physicians, patients, industry leaders and supporters to San Francisco in October to share the latest findings in early detection of cancer.",
    content: "The Early Detection of Cancer Conference brought top scientists and innovators in cancer research and bioengineering, physicians, patients, industry leaders and supporters to San Francisco in October to share the latest findings in early detection of cancer. The conference evolved from the formed international collaboration to accelerate research in the early detection of cancer. The goal of this unique trans-Atlantic agreement is to find lethal cancers as they are forming so they can be treated more effectively. Survival increases significantly when the disease is treated at an early stage. The collaboration also seeks to accelerate progress by breaking down barriers for scientists, fostering international cooperation and knowledge sharing in the critical field of cancer early detection.",
    author: "Renata Barnes",
    date: "2024-11-01",
    category: "Conference",
    tags: ["EDx24", "Conference", "Stanford", "Cancer Research UK", "OHSU", "Collaboration"],
    readTime: "4 min read",
    featured: false,
    url: "https://www.canaryfoundation.org/2024/11/01/early-detection-of-cancer-annual-conference-edx24/"
  },
  {
    id: 3,
    title: "Early Detection of Cancer Annual Conference- EDx23 – hosted by Cancer Research UK, Canary Center at Stanford, & OHSU Knight Cancer Institute",
    excerpt: "The Early Detection of Cancer Conference brought nearly 500 researchers, physicians, patients, industry leaders and supporters to London in October to share the latest findings in early detection of cancer.",
    content: "The Early Detection of Cancer Conference brought nearly 500 researchers, physicians, patients, industry leaders and supporters to London in October to share the latest findings in early detection of cancer. The conference was the largest since its inception and included lively debates, discussions, and presentations of recent advances in cancer early detection. This annual gathering represents the pinnacle of international collaboration in the field, bringing together the brightest minds to advance breakthrough research and accelerate the development of life-saving technologies.",
    author: "Renata Barnes",
    date: "2023-11-01",
    category: "Conference",
    tags: ["EDx23", "Conference", "London", "Cancer Research UK", "Stanford", "OHSU"],
    readTime: "4 min read",
    featured: false,
    url: "https://www.canaryfoundation.org/2023/11/01/early-detection-of-cancer-annual-conference-edx23-hosted-by-cancer-research-uk-canary-center-at-stanford-ohsu-knight-cancer-institute-and-bringing-together-great-minds-to-collaborate-i/"
  },
  {
    id: 4,
    title: "Don Listwin Award For Outstanding Contribution to Cancer Early Detection 2023 goes to: Professor Peter Sasieni",
    excerpt: "Congratulations to Professor Peter Sasieni, Academic Director of the Kings Clinical Trials Unit at King's College London, who was presented with the 2023 Don Listwin award at the Early Detection of Cancer conference.",
    content: "Congratulations to Professor Peter Sasieni, Academic Director of the Kings Clinical Trials Unit at King's College London, who was presented with the 2023 Don Listwin award at the Early Detection of Cancer conference dinner. The award recognizes outstanding contribution to cancer early detection. Peter's long career in cervical cancer prevention started with his first post-doctoral position at the Imperial Cancer Research Fund, looking at ways to optimize cervical cancer screening. He then looked at the potential for HPV testing to improve cervical cancer screening, followed by researching HPV vaccination as a means of cervical cancer prevention. Peter has also been working with Professor Rebecca Fitzgerald on the BEST trials which have assessed the use of the Cytosponge 'sponge on a string' device as a means of early detection and prevention of oesophageal cancer.",
    author: "Renata Barnes",
    date: "2023-11-01",
    category: "Awards",
    tags: ["Don Listwin Award", "Peter Sasieni", "Cervical Cancer", "HPV", "BEST Trials", "Cytosponge"],
    readTime: "6 min read",
    featured: false,
    url: "https://www.canaryfoundation.org/2023/11/01/don-listwin-award-for-outstanding-contribution-to-cancer-early-detection-2023-goes-to-professor-peter-sasieni/"
  },
  {
    id: 5,
    title: "Canary Ovary Team is approaching a milestone of completing its first study of fallopian tubes",
    excerpt: "The Canary Ovary Team's initiative to tackle High Grade Serous Ovarian Cancer (HGSOC) is approaching a milestone of completing its first study of fallopian tubes from women with and without mutations in the BRCA genes.",
    content: "The Canary Ovary Team's initiative to tackle High Grade Serous Ovarian Cancer (HGSOC) is approaching a milestone of completing its first study of fallopian tubes from women with and without mutations in the BRCA genes. HGSOC arises from the fallopian tubes, is the most common and deadly type of ovarian cancer, and women with BRCA mutations are at higher risk. The team has been carefully studying tubes to find whether there are BRCA-associated signals present at the molecular level, even in BRCA mutant tubes that appear 'normal' under the microscope. When complete, this study will be the largest of its kind and will serve as a definitive resource for follow-up studies and for the research community focused on detecting ovarian cancer early.",
    author: "Renata Barnes",
    date: "2023-11-01",
    category: "Research",
    tags: ["Ovarian Cancer", "BRCA", "Fallopian Tubes", "HGSOC", "Molecular Research"],
    readTime: "4 min read",
    featured: false,
    url: "https://www.canaryfoundation.org/2023/11/01/canary-ovary-team-is-approaching-a-milestone-of-completing-its-first-study-of-fallopian-tubes/"
  },
  {
    id: 6,
    title: "Early Detection of Cancer Annual Conference- EDx22 – hosted by OHSU Knight Cancer Institute, The Canary Center at Stanford, and Cancer Research UK",
    excerpt: "This year's sold-out conference had engaging discussions, talks from submitted abstracts, and opportunities to collaborate with experts from across the globe, with provocative early detection challenges.",
    content: "This year's sold-out conference had engaging discussions, talks from submitted abstracts, and opportunities to collaborate with experts from across the globe. There was also the opportunity to debate provocative early detection challenges. The conference featured keynote presentations on population and tumor heterogeneity in cancer genome science, emerging technologies for early detection and precision diagnosis, and panels on multi-cancer early detection tests and funding agency perspectives. Notable sessions included discussions on microbiological risk factors, mathematical tools for spatial analysis, and the clinical impact requirements for early detection tests.",
    author: "Renata Barnes",
    date: "2022-11-17",
    category: "Conference",
    tags: ["EDx22", "Conference", "OHSU", "Stanford", "Cancer Research UK", "Collaboration"],
    readTime: "5 min read",
    featured: false,
    url: "https://www.canaryfoundation.org/2022/11/17/early-detection-of-cancer-annual-conference-edx22-hosted-by-ohsu-knight-cancer-institute-the-canary-center-at-stanford-and-cancer-research-uk-brought-together-great-minds-to-collaborate-i/"
  },
  {
    id: 7,
    title: "Don Listwin Award For Outstanding Contribution to Cancer Early Detection 2022 goes to: Sudhir Srivastava, Ph.D., MPH, MS",
    excerpt: "The 2022 Award goes to Sudhir Srivastava, Senior Scientific Officer and Chief of the Cancer Biomarkers Research Branch in the Division of Cancer Prevention, National Cancer Institute (NCI), National Institutes of Health (NIH).",
    content: "The Don Listwin Award for Outstanding Contribution to Cancer Early Detection recognizes a sustained contribution to, or singular achievement in, the cancer early detection field. The 2022 Award goes to Sudhir Srivastava, Ph.D., MPH, MS: Senior Scientific Officer and Chief of the Cancer Biomarkers Research Branch in the Division of Cancer Prevention, National Cancer Institute (NCI), National Institutes of Health (NIH). He is well-known for having established a number of transformative programs on translational research on cancer screening, early detection, risk assessment and enabling technologies including artificial intelligence with a network of leading experts. In 2000, Dr. Srivastava developed and implemented the Early Detection Research Network, a flagship program at the NCI that has begun translating biomarkers into clinical tests (> 8 FDA approved and > 19 CLIA certified) for early detection.",
    author: "Renata Barnes",
    date: "2022-11-16",
    category: "Awards",
    tags: ["Don Listwin Award", "Sudhir Srivastava", "NCI", "NIH", "Biomarkers", "EDRN"],
    readTime: "6 min read",
    featured: false,
    url: "https://www.canaryfoundation.org/2022/11/16/don-listwin-award-for-outstanding-contribution-to-cancer-early-detection-2022-goes-to-sudhir-srivastava-ph-d-mph-ms/"
  }
];

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
                  
                  <Button 
                    className="bg-primary text-white hover:bg-primary-dark animate-shimmer"
                    onClick={() => {
                      trackOutboundLink(featuredPost.url);
                      trackClick(`blog_featured_${featuredPost.id}`, 'blog_engagement');
                      window.open(featuredPost.url, '_blank');
                    }}
                  >
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
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-primary hover:text-primary-dark animate-shimmer"
                          onClick={() => {
                            trackOutboundLink(post.url);
                            trackClick(`blog_post_${post.id}`, 'blog_engagement');
                            window.open(post.url, '_blank');
                          }}
                        >
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
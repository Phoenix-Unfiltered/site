import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Sample blog data - in a real application this would come from a CMS or API
const CATEGORIES = ["All", "Fire", "Ash", "Rise", "Rebuild"];

const BLOG_POSTS = [
  {
    id: 8,
    title: "Why Excessive Empathy is Not Always the Hero We Think It Is",
    excerpt: "Empathy - that beautiful, magical ability to feel and understand another person's emotions as if they were your own. It can be a superpower in relationships, in leadership, in helping others. But have you ever wondered if too much empathy could be doing more harm than good?",
    category: "Information Station",
    emotionalTone: "Reflective",
    date: "April 18, 2025",
    slug: "excessive-empathy",
    featured: false,
  },
  {
    id: 1,
    title: "The Messy Middle",
    excerpt: "There's beauty in the breakdown, they said. They forgot to mention the part where you feel like you're drowning in your own thoughts.",
    category: "Fire",
    emotionalTone: "Raw",
    date: "April 12, 2025",
    slug: "the-messy-middle",
    featured: false,
  },
  {
    id: 2,
    title: "Rebuilding, Barefoot",
    excerpt: "Sometimes you have to walk through the broken glass to get to the other side. And yes, it's going to hurt.",
    category: "Rebuild",
    emotionalTone: "Resilient",
    date: "April 5, 2025",
    slug: "rebuilding-barefoot",
    featured: false,
  },
  {
    id: 3,
    title: "Chased by Cheetahs & Choices",
    excerpt: "When a wildlife encounter becomes the perfect metaphor for running from yourself.",
    category: "Rise",
    emotionalTone: "Contemplative",
    date: "March 29, 2025",
    slug: "chased-by-cheetahs",
    featured: false,
  },
  {
    id: 4,
    title: "When the Fire Burns Out",
    excerpt: "What happens when the rage that kept you going suddenly disappears? Finding purpose in the calm after the storm.",
    category: "Ash",
    emotionalTone: "Reflective",
    date: "March 20, 2025",
    slug: "when-fire-burns-out",
    featured: false,
  },
  {
    id: 5,
    title: "Scars That Speak",
    excerpt: "The stories our bodies tell when we finally listen. Learning to read the map of your own healing.",
    category: "Rise",
    emotionalTone: "Vulnerable",
    date: "March 15, 2025",
    slug: "scars-that-speak",
    featured: false,
  },
  {
    id: 6,
    title: "The Art of Falling Apart Gracefully",
    excerpt: "There is no manual for breaking down. But there might be a rhythm to it - if you're willing to listen.",
    category: "Fire",
    emotionalTone: "Poetic",
    date: "March 8, 2025",
    slug: "art-of-falling-apart",
    featured: false,
  },
  {
    id: 7,
    title: "Survival Mode Isn't Living",
    excerpt: "I've spent years convincing myself that keeping people at a distance is the safest option. Not because I enjoy loneliness, but because I've learned that nothing good lasts forever.",
    category: "Rise",
    emotionalTone: "Vulnerable",
    date: "April 17, 2025",
    slug: "survival-mode-isnt-living",
    featured: true,
    imagePath: "/lovable-uploads/3d24eee4-f735-4549-9998-43476f82a080.png"
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === selectedCategory);
    
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || (selectedCategory !== "All" && post.category === selectedCategory));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-phoenix-dark text-white py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <Link to="/" className="inline-flex items-center text-phoenix-fire hover:underline mb-6">
              <ArrowLeft size={16} className="mr-1" /> Back to home
            </Link>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">The Journal</h1>
            <p className="text-white/80 max-w-2xl">
              Unfiltered thoughts, raw emotions, and occasional wisdom. 
              Sometimes profound, sometimes messy, always honest.
            </p>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-6 border-b">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    category === selectedCategory 
                      ? 'bg-phoenix-fire text-white' 
                      : 'bg-phoenix-light hover:bg-phoenix-fire/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <section className="py-12">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="bg-phoenix-light rounded-lg overflow-hidden shadow-lg">
                <div className="md:flex">
                  {featuredPost.imagePath && (
                    <div className="md:w-1/2">
                      <img 
                        src={featuredPost.imagePath} 
                        alt={featuredPost.title} 
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                  )}
                  <div className={`p-8 ${featuredPost.imagePath ? 'md:w-1/2' : 'w-full'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-phoenix-fire text-white px-3 py-1 rounded-full text-xs">
                        {featuredPost.category}
                      </span>
                      <span className="text-phoenix-ash text-xs">
                        {featuredPost.emotionalTone}
                      </span>
                      <span className="text-phoenix-ash text-xs">
                        {featuredPost.date}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl mb-4">{featuredPost.title}</h2>
                    
                    <p className="text-phoenix-ash mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="btn-phoenix inline-flex items-center"
                    >
                      Read Full Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* All Posts Grid */}
        <section className="py-12 bg-phoenix-light">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl md:text-3xl mb-8">All Journal Entries</h2>
            
            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map(post => (
                  <article key={post.id} className="card-phoenix bg-white">
                    <div className="p-6">
                      <div className="text-sm text-phoenix-fire mb-2 flex items-center gap-2">
                        <span className="bg-phoenix-fire/10 px-2 py-1 rounded">
                          {post.category}
                        </span>
                        <span className="text-phoenix-ash text-xs">
                          {post.emotionalTone}
                        </span>
                      </div>
                      
                      <h3 className="text-xl mb-3">{post.title}</h3>
                      
                      <p className="text-phoenix-ash mb-4 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-xs text-phoenix-ash">{post.date}</span>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-phoenix-fire flex items-center text-sm hover:underline"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg shadow">
                <p className="text-phoenix-ash mb-4">No posts found in this category.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="btn-phoenix"
                >
                  View All Posts
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;

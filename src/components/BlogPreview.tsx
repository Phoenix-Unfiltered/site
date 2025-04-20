
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 7,
    title: "Survival Mode Isn't Living",
    excerpt: "I've spent years convincing myself that keeping people at a distance is the safest option. Not because I enjoy loneliness, but because I've learned that nothing good lasts forever.",
    category: "Rise",
    emotionalTone: "Vulnerable",
    date: "April 17, 2025",
    slug: "survival-mode-isnt-living"
  },
  {
    id: 1,
    title: "The Messy Middle",
    excerpt: "There's beauty in the breakdown, they said. They forgot to mention the part where you feel like you're drowning in your own thoughts.",
    category: "Fire",
    emotionalTone: "Raw",
    date: "April 12, 2025",
    slug: "the-messy-middle"
  },
  {
    id: 2,
    title: "Rebuilding, Barefoot",
    excerpt: "Sometimes you have to walk through the broken glass to get to the other side. And yes, it's going to hurt.",
    category: "Rebuild",
    emotionalTone: "Resilient",
    date: "April 5, 2025",
    slug: "rebuilding-barefoot"
  }
];

const BlogPreview = () => {
  return (
    <section className="section-container" id="blog">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center mb-2">📚 Read the Latest</h2>
        <p className="text-center mb-8 text-phoenix-ash">
          A blog? Kind of. A war cry? Also yes.<br />
          Here's what's been on my mind lately – the real, the raw, the ridiculous.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="card-phoenix p-5">
              <div className="text-sm text-phoenix-fire mb-1 flex items-center gap-2">
                <span className="bg-phoenix-fire/10 px-2 py-1 rounded">
                  {post.category}
                </span>
                <span className="text-phoenix-ash text-xs">
                  {post.emotionalTone}
                </span>
              </div>
              
              <h3 className="text-xl mb-2">{post.title}</h3>
              
              <p className="text-phoenix-ash mb-4 text-sm line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-phoenix-ash">{post.date}</span>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-phoenix-fire flex items-center text-sm hover:underline"
                >
                  Read more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Link to="/blog" className="btn-phoenix">
            Read More Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

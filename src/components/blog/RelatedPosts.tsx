
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/blogPosts";

type RelatedPostsProps = {
  currentPostId: number;
  posts: BlogPost[];
};

const RelatedPosts = ({ currentPostId, posts }: RelatedPostsProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl mb-6">Continue Reading</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {posts.filter(p => p.id !== currentPostId)
            .slice(0, 2)
            .map(relatedPost => (
            <article key={relatedPost.id} className="card-phoenix p-6">
              <div className="text-sm text-phoenix-fire mb-2 flex items-center gap-2">
                <span className="bg-phoenix-fire/10 px-2 py-1 rounded">
                  {relatedPost.category}
                </span>
                <span className="text-phoenix-ash text-xs">
                  {relatedPost.emotionalTone}
                </span>
              </div>
              
              <h3 className="text-xl mb-3">{relatedPost.title}</h3>
              
              <p className="text-phoenix-ash mb-4 text-sm line-clamp-3">
                {relatedPost.excerpt}
              </p>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs text-phoenix-ash">{relatedPost.date}</span>
                <Link 
                  to={`/blog/${relatedPost.slug}`}
                  className="text-phoenix-fire flex items-center text-sm hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;


import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

type BlogPostHeaderProps = {
  post: BlogPost;
};

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <section className="bg-phoenix-dark text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-phoenix-fire hover:underline mb-6">
          <ArrowLeft size={16} className="mr-1" /> Back to Journal
        </Link>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <span className="bg-phoenix-fire/20 text-phoenix-fire px-3 py-1 rounded-full text-xs">
            {post.category}
          </span>
          <span className="bg-gray-700/30 text-gray-200 px-3 py-1 rounded-full text-xs">
            {post.emotionalTone}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4">{post.title}</h1>
        
        {post.inspirationSource && (
          <p className="text-phoenix-ash text-sm italic mb-4">
            {post.inspirationSource}
          </p>
        )}
        
        <p className="text-phoenix-ash text-sm">
          {post.date}
        </p>
      </div>
    </section>
  );
};

export default BlogPostHeader;


import { Link, useParams } from "react-router-dom";
import { Heart, Share2, Bookmark } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { BLOG_POSTS } from "@/data/blogPosts";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogComments from "@/components/blog/BlogComments";
import RelatedPosts from "@/components/blog/RelatedPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(post => post.slug === slug);
  
  const currentIndex = post ? BLOG_POSTS.findIndex(p => p.id === post.id) : -1;
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl mb-4">Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog" className="btn-phoenix">
              Back to Journal
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <BlogPostHeader post={post} />
        
        {post.imagePath && (
          <div className="w-full max-w-5xl mx-auto -mt-6 md:mt-0 px-4 md:px-0 relative z-10">
            <img 
              src={post.imagePath} 
              alt={post.title} 
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
        
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-lg max-w-none prose-headings:font-playfair prose-headings:text-phoenix-dark prose-p:text-phoenix-ash prose-a:text-phoenix-fire">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            
            <div className="flex justify-between items-center mt-12 mb-8">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-phoenix-ash">
                  <Heart size={18} className="mr-2" />
                  Like
                </Button>
                <Button variant="ghost" size="sm" className="text-phoenix-ash">
                  <Share2 size={18} className="mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm" className="text-phoenix-ash">
                  <Bookmark size={18} className="mr-2" />
                  Save
                </Button>
              </div>
            </div>
            
            <Separator className="my-8" />
            
            <BlogComments />
          </div>
        </section>
        
        <section className="py-8 bg-phoenix-light">
          <div className="container mx-auto px-4 max-w-4xl">
            <Pagination>
              <PaginationContent>
                {prevPost && (
                  <PaginationItem>
                    <PaginationPrevious href={`/blog/${prevPost.slug}`} />
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationLink href="/blog">
                    All Posts
                  </PaginationLink>
                </PaginationItem>
                
                {nextPost && (
                  <PaginationItem>
                    <PaginationNext href={`/blog/${nextPost.slug}`} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </section>
        
        <RelatedPosts currentPostId={post.id} posts={BLOG_POSTS} />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;

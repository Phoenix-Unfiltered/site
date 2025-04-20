
import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const BlogComments = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-6">Comments ({comments.length})</h3>
      
      <div className="mb-6">
        <Textarea
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="mt-2 flex justify-end">
          <Button 
            onClick={handleCommentSubmit}
            className="bg-phoenix-fire hover:bg-phoenix-fire/90 text-white"
          >
            <MessageSquare size={16} className="mr-2" />
            Post Comment
          </Button>
        </div>
      </div>
      
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((c, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-phoenix-fire/20 rounded-full flex items-center justify-center text-phoenix-fire font-bold">
                  A
                </div>
                <div className="ml-2">
                  <p className="font-medium">Anonymous</p>
                  <p className="text-xs text-gray-500">Just now</p>
                </div>
              </div>
              <p className="text-phoenix-ash">{c}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-phoenix-ash">
          <MessageSquare size={24} className="mx-auto mb-3 text-phoenix-ash/50" />
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      )}
    </div>
  );
};

export default BlogComments;

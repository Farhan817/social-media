
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

export const ActionBar = ({likeCount,commentCount,handelLike,post}) => (
  <div className="flex justify-between text-gray-500 text-sm mt-3 px-1">
    <button className="flex items-center gap-1"><Heart size={16} onClick={()=>handelLike(post.id)} /> Like {likeCount}</button>
    <button className="flex items-center gap-1"><MessageCircle size={16} /> Comment {commentCount}</button>
  </div>
);

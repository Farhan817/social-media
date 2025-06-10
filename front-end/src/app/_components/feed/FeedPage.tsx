
"use client"
import { mockPosts } from "../../mockdata";
import { ActionBar } from "../ui/ActionBar";
import { PostCard } from "../ui/PostCard";
import useFeed from "./hook/useFeed";


const FeedList = () => {
  const[{ posts }, { handelPagination,handelCreatePost,handelLike }] = useFeed()
return(
  <div className="px-4">
    {posts.map((post) => (
      <div className="bg-white shadow-sm rounded-xl p-4 mb-4">
      <PostCard key={post.id} post={post} />
      <ActionBar commentCount={post.commentCount} likeCount={post.likeCount} handelLike={handelLike} post={post}  />
      </div>
    ))}
  </div>
);
}
export default FeedList
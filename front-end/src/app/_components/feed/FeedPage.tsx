"use client";
import { mockPosts } from "../../mockdata";
import { ActionBar } from "../ui/ActionBar";
import { PostCard } from "../ui/PostCard";
import useFeed from "./hook/useFeed";

const FeedList = () => {
  const [
    { posts, page, totalPage },
    { handelPagination,  handelLike },
  ] = useFeed();
  return (
    <div className="px-4">
      {posts.map((post) => (
        <div className="bg-white shadow-sm rounded-xl p-4 mb-4">
          <PostCard key={post.id} post={post} />
          <ActionBar
            commentCount={post.commentCount}  
            likeCount={post.likeCount}
            handelLike={handelLike}
            post={post}
          />
        </div>
      ))}
      {page <= totalPage ? (
        <div className="flex justify-center mt-6">
          <button
            onClick={handelPagination}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 text-sm"
          >
            Load More
          </button>
        </div>
      ) : (
        <div className="flex justify-center mt-6"> All post loaded</div>
      )}
    </div>
  );
};
export default FeedList;

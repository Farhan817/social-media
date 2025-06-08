import React from 'react'
import { PostTileProps } from '../../_utils/types';

const PostTile:React.FC<PostTileProps> = ({post}) => {
  return (

    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex items-center mb-2">
        <img
          src={post.profilePicUrl || '/default-profile.png'}
          alt={post.username}
          className="w-10 h-10 rounded-full mr-3 object-cover"
        />
        <span className="font-semibold text-gray-800">{post.username}</span>
      </div>
      <p className="text-gray-700 text-sm whitespace-pre-line">{post.content}</p>
    </div>
  );
}

export default PostTile

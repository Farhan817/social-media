"use client"
import React from 'react'
import useFeed from './hook/useFeed'
import PostTile from '../ui/PostTile'
import { Post } from '../../_utils/types'

const FeedPage = () => {
   const [{posts},{handelPagination}]: [{ posts: Post[] }, { handelPagination: () => void }]= useFeed()
    return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Feed</h1>
      <div className="space-y-4">
        {posts?.map((post) => (
          <PostTile key={post.id} post={post} />
        ))}
      </div>
      
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => handelPagination()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            Load More
          </button>
        </div>
      
    </div>
  )
}

export default FeedPage

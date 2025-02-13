import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import CommentModal from './CommentModal';

export default function Post({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-6 max-w-2xl mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Post Header */}
      <div className="flex items-center p-4">
        <img
          src={post.profile_picture}
          alt={post.username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="ml-3 font-semibold">{post.username}</span>
      </div>

      {/* Post Image */}
      <div className="relative aspect-[4/3]">
        <img
          src={post.post_image}
          alt="Post content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex gap-4 mb-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-1 transition-colors ${
              isLiked ? 'text-red-500' : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likesCount}</span>
          </button>
          <button
            onClick={() => setShowComments(true)}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            <span>{post.comments}</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors ml-auto">
            <Share2 className="w-6 h-6" />
          </button>
        </div>

        {/* Caption */}
        <div className="text-sm">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </div>
      </div>

      {/* Comment Modal */}
      <CommentModal
        isOpen={showComments}
        onClose={() => setShowComments(false)}
        postId={post.id}
      />
    </div>
  );
}
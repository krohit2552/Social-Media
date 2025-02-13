import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function CommentModal({ isOpen, onClose, postId }) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      username: 'user123',
      text: 'Amazing shot! 📸',
      timestamp: '2h ago'
    },
    {
      id: 2,
      username: 'photography_lover',
      text: 'The lighting is perfect!',
      timestamp: '1h ago'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      username: 'current_user',
      text: newComment,
      timestamp: 'Just now'
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg max-h-[80vh] flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Comments</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {comments.map(comment => (
            <div key={comment.id} className="mb-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{comment.username}</span>
                <span className="text-sm text-gray-500">{comment.timestamp}</span>
              </div>
              <p className="text-gray-700 mt-1">{comment.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              disabled={!newComment.trim()}
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
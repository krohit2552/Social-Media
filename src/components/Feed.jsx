import React, { useState, useEffect } from 'react';
import Post from './Post';
import { Loader2 } from 'lucide-react';

const POSTS_PER_PAGE = 5;

const MOCK_DATA = [
  {
    id: 1,
    username: "root",
    profile_picture: "https://randomuser.me/api/portraits/men/1.jpg",
    post_image: "https://picsum.photos/600/400?random=1",
    caption: "Exploring the mountains!",
    likes: 120,
    comments: 15
  },
  {
    id: 2,
    username: "jane_smith",
    profile_picture: "https://randomuser.me/api/portraits/women/2.jpg",
    post_image: "https://picsum.photos/600/400?random=2",
    caption: "Beach vibes 🌊🏖",
    likes: 200,
    comments: 25
  },
  {
    id: 3,
    username: "traveler_joe",
    profile_picture: "https://randomuser.me/api/portraits/men/3.jpg",
    post_image: "https://picsum.photos/600/400?random=3",
    caption: "Sunset in the desert 🌅🐪",
    likes: 95,
    comments: 10
  },
  {
    id: 4,
    username: "foodie_girl",
    profile_picture: "https://randomuser.me/api/portraits/women/4.jpg",
    post_image: "https://picsum.photos/600/400?random=4",
    caption: "Delicious pasta 🍝👩‍🍳",
    likes: 300,
    comments: 45
  },
  {
    id: 5,
    username: "nature_lover",
    profile_picture: "https://randomuser.me/api/portraits/men/5.jpg",
    post_image: "https://picsum.photos/600/400?random=5",
    caption: "Forest hike 🌲🥾",
    likes: 150,
    comments: 20
  },
  {
    id: 6,
    username: "city_explorer",
    profile_picture: "https://randomuser.me/api/portraits/women/6.jpg",
    post_image: "https://picsum.photos/600/400?random=6",
    caption: "Skyline at night 🌃✨",
    likes: 250,
    comments: 30
  },
  {
    id: 7,
    username: "adventure_guy",
    profile_picture: "https://randomuser.me/api/portraits/men/7.jpg",
    post_image: "https://picsum.photos/600/400?random=7",
    caption: "Rock climbing adventure 🧗‍♂️🏔",
    likes: 175,
    comments: 18
  },
  {
    id: 8,
    username: "fashionista",
    profile_picture: "https://randomuser.me/api/portraits/women/8.jpg",
    post_image: "https://picsum.photos/600/400?random=8",
    caption: "New outfit, who dis? 👗👠",
    likes: 400,
    comments: 60
  },
  {
    id: 9,
    username: "tech_guru",
    profile_picture: "https://randomuser.me/api/portraits/men/9.jpg",
    post_image: "https://picsum.photos/600/400?random=9",
    caption: "Latest gadget unboxing 📱💻",
    likes: 220,
    comments: 35
  },
  {
    id: 10,
    username: "artsy_amy",
    profile_picture: "https://randomuser.me/api/portraits/women/10.jpg",
    post_image: "https://picsum.photos/600/400?random=10",
    caption: "Watercolor painting 🎨🖌",
    likes: 180,
    comments: 22
  },
  {
    id: 11,
    username: "rohit1237801",
    profile_picture: "28KB.jpg",
    post_image: "https://picsum.photos/600/400?random=11",
    caption: "Watercolor painting 🎨🖌",
    likes: 180,
    comments: 22
  }
];

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Simulating API call with the provided mock data
  const fetchPosts = async () => {
    try {
      setLoading(true);
      // Simulating network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const start = 0;
      const end = page * POSTS_PER_PAGE;
      const newPosts = MOCK_DATA.slice(start, end);
      
      setPosts(newPosts);
      setHasMore(end < MOCK_DATA.length);
      setError(null);
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      
      {loading ? (
        <div className="flex justify-center p-4">
          <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
        </div>
      ) : hasMore ? (
        <button
          onClick={() => setPage(prev => prev + 1)}
          className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Load More
        </button>
      ) : (
        <p className="text-center text-gray-500 py-4">No more posts to load</p>
      )}
    </div>
  );
}
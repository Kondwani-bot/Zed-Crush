
import React from 'react';
import { posts } from '../../services/mockData';
import PostCard from '../PostCard';

const Posts: React.FC = () => {
  return (
    <div className="p-2 sm:p-4">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-4 px-2">Stories</h2>
      <div className="space-y-4">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;

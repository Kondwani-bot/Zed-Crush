
import React from 'react';
import { Post } from '../../types';
import { HeartIcon } from './icons/HeartIcon';
import { ChatIcon } from './icons/ChatIcon';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="flex items-center p-3">
        <img src={post.user.images[0]} alt={post.user.name} className="w-10 h-10 rounded-full object-cover mr-3" />
        <div>
          <p className="font-semibold text-theme-text-primary">{post.user.name}</p>
          <p className="text-xs text-theme-text-secondary">{post.timestamp}</p>
        </div>
      </div>
      <img src={post.image} alt="post" className="w-full h-auto" />
      <div className="p-4">
        <p><span className="font-semibold mr-2">{post.user.name}</span>{post.caption}</p>
        <div className="flex items-center space-x-4 mt-3 text-theme-text-secondary">
          <div className="flex items-center space-x-1">
            <HeartIcon className="w-6 h-6" />
            <span>{post.likes}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ChatIcon className="w-6 h-6" />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

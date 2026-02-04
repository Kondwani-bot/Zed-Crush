
import React from 'react';
import { NavigationItem } from '../types';
import { NAV_ITEMS } from '../constants';
import { CompassIcon } from './icons/CompassIcon';
import { HeartIcon } from './icons/HeartIcon';
import { ChatIcon } from './icons/ChatIcon';
import { UserIcon } from './icons/UserIcon';
import { PostIcon } from './icons/PostIcon';

interface BottomNavProps {
  activeTab: NavigationItem;
  setActiveTab: (tab: NavigationItem) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
    const getIcon = (item: NavigationItem, isActive: boolean) => {
        const className = `w-6 h-6 transition-colors duration-300 ${isActive ? 'text-theme-primary' : 'text-theme-text-secondary'}`;
        switch (item) {
          case 'Discover': return <CompassIcon className={className} />;
          case 'Matches': return <HeartIcon className={className} />;
          case 'Messages': return <ChatIcon className={className} />;
          case 'Posts': return <PostIcon className={className} />;
          case 'Profile': return <UserIcon className={className} />;
          default: return null;
        }
      };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-theme-secondary/50 shadow-lg z-30">
      <div className="max-w-md mx-auto flex justify-around p-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className="flex flex-col items-center justify-center w-1/5 text-center p-2 rounded-lg transition-colors duration-300 hover:bg-theme-secondary/50"
          >
            {getIcon(item, activeTab === item)}
            <span className={`text-xs mt-1 font-medium ${activeTab === item ? 'text-theme-primary' : 'text-theme-text-secondary'}`}>{item}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;


import React from 'react';
import { NavigationItem } from '../types';
import { NAV_ITEMS, APP_NAME } from '../constants';
import { CompassIcon } from './icons/CompassIcon';
import { HeartIcon } from './icons/HeartIcon';
import { ChatIcon } from './icons/ChatIcon';
import { UserIcon } from './icons/UserIcon';
import { PostIcon } from './icons/PostIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface SidebarNavProps {
  activeTab: NavigationItem;
  setActiveTab: (tab: NavigationItem) => void;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ activeTab, setActiveTab }) => {
  const getIcon = (item: NavigationItem, isActive: boolean) => {
    const className = `w-6 h-6 transition-colors duration-300 group-hover:text-theme-primary ${isActive ? 'text-theme-primary' : 'text-theme-text-secondary'}`;
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
    <aside className="hidden md:flex flex-col fixed left-0 top-0 h-full bg-white border-r border-gray-200/80 z-30 w-20 lg:w-64 transition-all duration-300">
      <div className="flex items-center justify-center lg:justify-start px-4 lg:px-6 h-16 border-b border-gray-200/80">
        <SparklesIcon className="w-7 h-7 text-theme-primary" />
        <h1 className="hidden lg:block text-xl font-bold text-theme-primary ml-2">{APP_NAME}</h1>
      </div>
      <nav className="flex-grow mt-6">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`flex items-center w-full text-left p-4 lg:px-6 my-1 transition-colors duration-300 group relative ${activeTab === item ? 'text-theme-primary' : 'text-theme-text-secondary hover:bg-theme-secondary/20'}`}
          >
            {getIcon(item, activeTab === item)}
            <span className="hidden lg:block ml-4 font-semibold">{item}</span>
            {activeTab === item && <div className="absolute left-0 top-0 h-full w-1 bg-theme-primary rounded-r-full"></div>}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;

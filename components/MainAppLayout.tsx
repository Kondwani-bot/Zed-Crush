
import React, { useState } from 'react';
import Header from './Header';
import Discover from './views/Discover';
import Matches from './views/Matches';
import Messages from './views/Messages';
import Profile from './views/Profile';
import Posts from './views/Posts';
import { NavigationItem } from '../types';
import SidebarNav from './SidebarNav';
import BottomNav from './BottomNav';

const MainAppLayout: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationItem>('Discover');

  const renderContent = () => {
    switch (activeTab) {
      case 'Discover':
        return <Discover />;
      case 'Matches':
        return <Matches />;
      case 'Messages':
        return <Messages />;
      case 'Posts':
        return <Posts />;
      case 'Profile':
        return <Profile />;
      default:
        return <Discover />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-50/80 font-sans">
      <SidebarNav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex flex-col flex-grow md:ml-20 lg:ml-64 transition-all duration-300">
        <Header />
        <main className="flex-grow pt-16 pb-20 md:pb-0 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-0 md:p-6 lg:p-8 h-full">
            {renderContent()}
          </div>
        </main>
      </div>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MainAppLayout;

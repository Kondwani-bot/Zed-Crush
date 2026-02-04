
import React, { useState, useEffect, useCallback } from 'react';
import { users, CURRENT_USER_ID } from '../../services/mockData';
import ProfileCard from '../ProfileCard';
import { XIcon } from '../icons/XIcon';
import { HeartIcon } from '../icons/HeartIcon';
import { SparklesIcon } from '../icons/SparklesIcon';
import { getAIMatches } from '../../services/geminiService';
import { UserProfile, AIBadge } from '../../types';
import AILoading from '../AILoading';

const Discover: React.FC = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoadingAI, setIsLoadingAI] = useState(false);
  const [aiBadges, setAiBadges] = useState<Map<number, AIBadge>>(new Map());

  useEffect(() => {
    // Filter out the current user from the list of profiles
    setProfiles(users.filter(u => u.id !== CURRENT_USER_ID));
  }, []);

  const handleSwipe = useCallback(() => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Optional: loop back to the start or show an "out of profiles" message
      setCurrentIndex(0); 
    }
  }, [currentIndex, profiles.length]);

  const handleGetAIMatches = async () => {
    setIsLoadingAI(true);
    const currentUser = users.find(u => u.id === CURRENT_USER_ID);
    if (!currentUser) return;

    const aiResults = await getAIMatches(currentUser, profiles);
    const newBadges = new Map<number, AIBadge>();
    const aiSortedProfiles: UserProfile[] = [];

    aiResults.forEach((result: { userId: number; reason: string; compatibilityScore: number; }) => {
      newBadges.set(result.userId, { reason: result.reason, compatibilityScore: result.compatibilityScore });
      const profile = profiles.find(p => p.id === result.userId);
      if (profile) aiSortedProfiles.push(profile);
    });

    const otherProfiles = profiles.filter(p => !aiResults.some((r: any) => r.userId === p.id));
    
    setAiBadges(newBadges);
    setProfiles([...aiSortedProfiles, ...otherProfiles]);
    setCurrentIndex(0);
    setIsLoadingAI(false);
  };
  
  if (isLoadingAI) {
    return <AILoading />;
  }

  return (
    <div className="p-4 flex flex-col h-full">
      <button 
        onClick={handleGetAIMatches}
        className="mb-4 w-full flex items-center justify-center bg-gradient-to-r from-theme-primary to-theme-accent text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <SparklesIcon className="w-6 h-6 mr-2" />
        Find My AI Matches
      </button>
      
      <div className="relative flex-grow flex items-center justify-center">
        {profiles.length > 0 ? (
          <ProfileCard 
            user={profiles[currentIndex]} 
            onSwipe={handleSwipe}
            aiBadge={aiBadges.get(profiles[currentIndex].id)}
          />
        ) : (
          <p className="text-theme-text-secondary">No more profiles to show.</p>
        )}
      </div>

      <div className="flex justify-center items-center space-x-8 mt-4">
        <button onClick={handleSwipe} className="bg-white rounded-full p-4 shadow-xl text-red-500 hover:scale-110 transition-transform duration-200">
          <XIcon className="w-8 h-8" />
        </button>
        <button onClick={handleSwipe} className="bg-white rounded-full p-6 shadow-xl text-green-500 hover:scale-110 transition-transform duration-200">
          <HeartIcon className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default Discover;


import React from 'react';
import { UserProfile, AIBadge } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface ProfileCardProps {
  user: UserProfile;
  onSwipe: () => void;
  aiBadge?: AIBadge;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user, aiBadge }) => {
  return (
    <div className="relative w-full max-w-sm h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300">
      <img src={user.images[0]} alt={user.name} className="w-full h-full object-cover" />
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
        {aiBadge && (
            <div className="bg-theme-secondary/30 backdrop-blur-sm border border-theme-accent/50 text-white p-3 rounded-xl mb-3">
                <div className="flex items-center font-bold text-theme-accent mb-1">
                    <SparklesIcon className="w-5 h-5 mr-2 text-yellow-300" />
                    AI Match ({aiBadge.compatibilityScore}%)
                </div>
                <p className="text-sm italic text-white/90">{aiBadge.reason}</p>
            </div>
        )}
        <h2 className="text-3xl font-bold">{user.name}, {user.age}</h2>
        <p className="text-lg font-light">{user.occupation}</p>
        <p className="text-sm mt-1">{user.distance} miles away</p>
        <div className="mt-3">
          <p className="text-white/90 line-clamp-2">{user.bio}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {user.interests.slice(0, 4).map(interest => (
            <span key={interest} className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

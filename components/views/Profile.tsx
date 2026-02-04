
import React from 'react';
import { users, CURRENT_USER_ID } from '../../services/mockData';
import { UserProfile } from '../../types';

const Profile: React.FC = () => {
  const currentUser: UserProfile | undefined = users.find(u => u.id === CURRENT_USER_ID);

  if (!currentUser) {
    return <div>User not found.</div>;
  }

  return (
    <div className="p-4">
      <div className="relative w-40 h-40 mx-auto mb-4">
        <img src={currentUser.images[0]} alt={currentUser.name} className="w-full h-full rounded-full object-cover shadow-lg" />
        <button className="absolute bottom-2 right-2 bg-theme-primary text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md">+</button>
      </div>
      <h2 className="text-center text-3xl font-bold">{currentUser.name}, {currentUser.age}</h2>
      <p className="text-center text-theme-text-secondary mt-1">{currentUser.occupation}</p>

      <div className="mt-8 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-2">Bio</h3>
        <p className="text-theme-text-secondary">{currentUser.bio}</p>
      </div>

      <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-2">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {currentUser.interests.map(interest => (
            <span key={interest} className="bg-theme-secondary text-theme-primary text-sm font-medium px-3 py-1 rounded-full">
              {interest}
            </span>
          ))}
        </div>
      </div>

      <button className="mt-8 w-full bg-theme-primary text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-theme-accent transition-colors duration-300">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;

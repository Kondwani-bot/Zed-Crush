
import React from 'react';
import { Match } from '../../types';

interface MatchGridItemProps {
  match: Match;
}

const MatchGridItem: React.FC<MatchGridItemProps> = ({ match }) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1 group cursor-pointer">
      <img src={match.user.images[0]} alt={match.user.name} className="w-full h-full object-cover rounded-xl shadow-lg" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl flex items-end p-2">
        <p className="text-white font-semibold text-sm line-clamp-1">{match.user.name}</p>
      </div>
    </div>
  );
};

export default MatchGridItem;

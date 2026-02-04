
import React from 'react';
import { matches } from '../../services/mockData';
import MatchGridItem from '../MatchGridItem';

const Matches: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Your Matches</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {matches.map(match => (
          <MatchGridItem key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};

export default Matches;

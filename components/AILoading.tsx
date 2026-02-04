
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';

const AILoading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4">
      <SparklesIcon className="w-16 h-16 text-theme-primary animate-pulse" />
      <h2 className="text-2xl font-bold text-theme-primary mt-4">Finding Your Perfect Match...</h2>
      <p className="text-theme-text-secondary mt-2">
        Our AI is analyzing profiles to find the most compatible connections for you.
      </p>
    </div>
  );
};

export default AILoading;

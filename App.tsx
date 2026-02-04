
import React, { useState } from 'react';
import LandingPage from './components/views/LandingPage';
import MainAppLayout from './components/MainAppLayout';

const App: React.FC = () => {
  const [showLanding, setShowLanding] = useState(true);

  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return <MainAppLayout />;
};

export default App;

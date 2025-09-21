import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Intro from './components/Intro';
import Landingpage from './components/landingPage';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroFinish = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <Intro key="intro" onAnimationComplete={handleIntroFinish} />
        ) : (
          <Landingpage key="landingpage" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
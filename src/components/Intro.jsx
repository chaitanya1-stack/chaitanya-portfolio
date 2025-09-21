import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import './Intro.css';

export default function Intro({ onAnimationComplete }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 500),      // Initial "cliCK" appears
      setTimeout(() => setStep(2), 2000),     // "cli" disappears
      setTimeout(() => setStep(3), 2500),     // "CK" transforms to "Chaitanya Kumar"
      setTimeout(() => setStep(4), 4000),     // "Photography" appears
      setTimeout(() => onAnimationComplete(), 5500), // Finish animation
    ];
    
    return () => timers.forEach(clearTimeout);
  }, [onAnimationComplete]);

  // Variants for the letters in "haitanya" and "umar"
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div 
      className="intro-container"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LayoutGroup>
        <AnimatePresence>
          {step >= 1 && (
            <motion.div 
              className="name-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {step < 3 ? (
                // --- Step 1 & 2: Show "cliCK", then hide "cli" ---
                <motion.h1 className="intro-text large">
                  <motion.span 
                    className="cli-span"
                    animate={{ 
                      width: step === 2 ? 0 : 'auto', 
                      opacity: step === 2 ? 0 : 1,
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    cli
                  </motion.span>
                  <motion.span layoutId="C" className="inline-block">C</motion.span>
                  <motion.span layoutId="K" className="inline-block">K</motion.span>
                </motion.h1>
              ) : (
                // --- Step 3: Transform "CK" into "Chaitanya Kumar" ---
                <motion.h2 className="intro-text medium">
                  <motion.span layoutId="C" className="inline-block">C</motion.span>
                  {"haitanya".split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants} initial="hidden" animate="visible" transition={{delay: i * 0.05}}>
                      {char}
                    </motion.span>
                  ))}
                  <span className="name-spacer"></span>
                  <motion.span layoutId="K" className="inline-block">K</motion.span>
                  {"umar".split("").map((char, i) => (
                    <motion.span key={i} variants={letterVariants} initial="hidden" animate="visible" transition={{delay: i * 0.05}}>
                      {char}
                    </motion.span>
                  ))}
                </motion.h2>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Step 4: "Photography" appears on the next line --- */}
        <AnimatePresence>
          {step === 4 && (
            <motion.h3 
              className="intro-text small"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Photography
            </motion.h3>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
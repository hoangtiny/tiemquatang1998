import React from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, className = "" }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
  };

  const child = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, wordIndex) => {
        // Calculate the starting position of this word in the overall sentence roughly
        const prevWordsLength = words.slice(0, wordIndex).reduce((acc, w) => acc + w.length + 1, 0);

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
            {word.split("").map((char, charIndex) => {
              const globalIndex = prevWordsLength + charIndex;
              
              return (
                <motion.span 
                  key={charIndex} 
                  variants={child} 
                  className="inline-block"
                  transition={{ duration: 0.05, delay: 0.2 + (globalIndex * 0.02) }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </motion.div>
  );
};

export default TypewriterText;

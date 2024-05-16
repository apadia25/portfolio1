import React, { useState, useEffect } from 'react';

const Animation = () => {
  const words = ["Web Developer & Design Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const typingEffect = () => {
      setCurrentWord(words[index].substring(0, subIndex + 1));
      if (subIndex === words[index].length) {
        setIndex((prev) => (prev + 1) % words.length);
      }
      setSubIndex((prev) => (prev + 1) % (words[index].length + 1));
    };

    const speed = 200;
    const timer = setTimeout(typingEffect, speed);
    return () => clearTimeout(timer);
  }, [subIndex, index, words]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">{currentWord}</h1>
    </div>
  );
};

export default Animation;


// Certainly! The `Animation` component employs React hooks to create a continuous typing effect for a given string. It initializes state variables including `index` to keep track of the current word being displayed, `subIndex` to represent the position within the current word, and `currentWord` to hold the portion of the word being shown.

// Within the `useEffect` hook, a function named `typingEffect` is defined to update `currentWord` by incrementally adding characters from the current word until it's fully displayed. This function utilizes `setTimeout` to repeatedly call itself at a fixed interval, creating the typing animation. When `subIndex` reaches the length of the current word, the `index` is incremented to move to the next word in the array.

// The JSX returned by the component renders the current portion of the word (`currentWord`) within an `<h1>` element, effectively displaying the typing animation on the screen. This setup ensures that characters are continuously added to the displayed word without deletion, providing a seamless typing effect to the user.
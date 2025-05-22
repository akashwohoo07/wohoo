// src/components/animations/TextAnimationComponent.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

/**
 * A component that creates text animations using GSAP TextPlugin
 * @param {Object} props - Component props
 * @param {string} props.text - The text to animate to
 * @param {string} props.initialText - Optional initial text before animation (default: empty string)
 * @param {number} props.duration - Animation duration in seconds
 * @param {string} props.ease - GSAP easing function
 * @param {number} props.delay - Delay before animation starts
 * @param {string} props.className - Additional CSS classes
 */
const TextAnimationComponent = ({
  text,
  initialText = '',
  duration = 2,
  ease = 'none',
  delay = 0,
  className = '',
  ...props
}) => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const element = textRef.current;
    
    if (!element) return;
    
    // If initial text is provided, set it before animation
    if (initialText) {
      element.textContent = initialText;
    }
    
    // Create the text animation
    const animation = gsap.to(element, {
      duration,
      text: {
        value: text,
        delimiter: ''  // Can be '' for character by character, or ' ' for word by word
      },
      ease,
      delay
    });
    
    // Cleanup
    return () => {
      animation.kill();
    };
  }, [text, initialText, duration, ease, delay]);
  
  return (
    <div ref={textRef} className={className} {...props}></div>
  );
};

export default TextAnimationComponent;
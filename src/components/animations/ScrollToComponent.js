// src/components/animations/ScrollToComponent.js
import React, { useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

/**
 * A component that creates a smooth scroll-to action using GSAP ScrollToPlugin
 * @param {Object} props - Component props
 * @param {string} props.target - CSS selector or element reference to scroll to
 * @param {number} props.duration - Animation duration in seconds
 * @param {string} props.ease - GSAP easing function
 * @param {Object} props.offset - Offset from the target (e.g., {y: -50})
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Child elements (typically a button)
 */
const ScrollToComponent = ({
  target,
  duration = 1,
  ease = "power2.inOut",
  offset = { y: 0 },
  className = '',
  children,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!target) return;
    
    // Scroll to the target element
    gsap.to(window, {
      duration,
      scrollTo: {
        y: target,
        offsetY: offset.y,
        autoKill: true
      },
      ease
    });
  }, [target, duration, ease, offset]);
  
  return (
    <div 
      className={className} 
      onClick={handleClick} 
      style={{ cursor: 'pointer' }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollToComponent;
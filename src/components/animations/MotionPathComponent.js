// src/components/animations/MotionPathComponent.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

/**
 * A component that animates an element along a motion path using GSAP MotionPathPlugin
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The element to animate
 * @param {Array} props.path - Array of path points [{x: number, y: number}, ...]
 * @param {number} props.duration - Animation duration in seconds
 * @param {number} props.curviness - Path curviness (0 = straight lines, 1 = normal, 2 = more curved)
 * @param {boolean} props.repeat - Whether to repeat the animation (-1 for infinite)
 * @param {string} props.ease - GSAP easing function
 * @param {string} props.className - Additional CSS classes
 */
const MotionPathComponent = ({
  children,
  path,
  duration = 10,
  curviness = 1.5,
  repeat = -1,
  ease = "power1.inOut",
  className = '',
  ...props
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    
    if (!element || !path || path.length < 2) return;
    
    // Create the motion path animation
    const animation = gsap.to(element, {
      duration,
      repeat,
      ease,
      motionPath: {
        path,
        curviness,
        autoRotate: true
      },
      ...props
    });
    
    // Cleanup
    return () => {
      animation.kill();
    };
  }, [path, duration, curviness, repeat, ease, props]);
  
  return (
    <div 
      ref={elementRef} 
      className={`${className}`}
      style={{ position: 'absolute' }}
    >
      {children}
    </div>
  );
};

export default MotionPathComponent;
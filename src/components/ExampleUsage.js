// src/components/ExampleUsage.js
import React from 'react';
import ScrollTriggerComponent from './animations/ScrollTriggerComponent';
import TextAnimationComponent from './animations/TextAnimationComponent';
import MotionPathComponent from './animations/MotionPathComponent';
import ScrollToComponent from './animations/ScrollToComponent';

const ExampleUsage = () => {
  // Define a motion path
  const airplanePath = [
    {x: 0, y: 0},
    {x: 200, y: -50},
    {x: 400, y: 0},
    {x: 200, y: 50},
    {x: 0, y: 0}
  ];
  
  return (
    <div className="container mx-auto p-4">
      {/* Example of TextAnimationComponent */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Text Animation Example</h2>
        <TextAnimationComponent
          text="Welcome to the Amazing Travel Experience!"
          duration={3}
          className="text-4xl font-bold text-blue-600"
        />
      </div>
      
      {/* Example of ScrollTriggerComponent */}
      <div className="my-24">
        <h2 className="text-3xl font-bold mb-4 text-center">Scroll Trigger Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <ScrollTriggerComponent
            animation={{ y: 100, opacity: 0, duration: 1 }}
            trigger={{ start: "top 80%" }}
            className="bg-blue-100 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Scroll Triggered Card 1</h3>
            <p>This card animates when you scroll to it.</p>
          </ScrollTriggerComponent>
          
          <ScrollTriggerComponent
            animation={{ x: -100, opacity: 0, duration: 1 }}
            trigger={{ start: "top 80%", toggleActions: "play none none reset" }}
            className="bg-green-100 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Scroll Triggered Card 2</h3>
            <p>This card slides in from the left.</p>
          </ScrollTriggerComponent>
          
          <ScrollTriggerComponent
            animation={{ x: 100, opacity: 0, duration: 1 }}
            trigger={{ start: "top 80%", toggleActions: "play none none reset" }}
            className="bg-purple-100 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2">Scroll Triggered Card 3</h3>
            <p>This card slides in from the right.</p>
          </ScrollTriggerComponent>
        </div>
      </div>
      
      {/* Example of MotionPathComponent */}
      <div className="my-24 relative h-64 bg-gray-100 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4 text-center">Motion Path Example</h2>
        <div className="relative w-full h-full">
          <MotionPathComponent
            path={airplanePath}
            duration={5}
            curviness={1.5}
            repeat={-1}
            ease="power1.inOut"
          >
            <div className="text-4xl">✈️</div>
          </MotionPathComponent>
        </div>
      </div>
      
      {/* Example of ScrollToComponent */}
      <div className="my-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Scroll To Example</h2>
        <ScrollToComponent
          target="#top"
          duration={1.5}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Scroll to Top
        </ScrollToComponent>
      </div>
    </div>
  );
};

export default ExampleUsage;
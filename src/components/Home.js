// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, MotionPathPlugin);

const Home = () => {
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const destinationsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const experienceRef = useRef(null);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);
  const planeRef = useRef(null);
  const headingRef = useRef(null);
  const videoRefs = useRef([]);
  
  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl.from(heroRef.current.querySelector('.hero-content'), {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    })
    .from(heroRef.current.querySelector('.hero-overlay'), {
      opacity: 0,
      duration: 1,
      delay: -0.8
    })
    .from(heroRef.current.querySelector('.hero-image'), {
      scale: 1.2,
      duration: 2,
      delay: -1,
      ease: "power2.out"
    })
    .from(planeRef.current, {
      x: -200,
      y: 100,
      rotation: 15,
      duration: 2.5,
      delay: -1.5,
      ease: "power1.inOut"
    });
    
    // Animate hero heading with text reveal
    gsap.to(headingRef.current, {
      duration: 2,
      text: {
        value: "Discover the World's Wonders",
        delimiter: " "
      },
      ease: "none",
      delay: 0.5
    });
    
    // Flying plane animation along a path
    gsap.to(planeRef.current, {
      duration: 15,
      repeat: -1,
      ease: "power1.inOut",
      motionPath: {
        path: [
          {x: window.innerWidth * 0.2, y: -50},
          {x: window.innerWidth * 0.8, y: -100},
          {x: window.innerWidth * 0.6, y: -30},
          {x: window.innerWidth * 0.3, y: -80},
          {x: -100, y: -60}
        ],
        curviness: 1.5
      },
      rotation: -5
    });
    
    // Features cards animation
    const featureCards = featuresRef.current.querySelectorAll('.feature-card');
    
    gsap.from(featureCards, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });
    
    // Destination cards parallax and reveal
    const destCards = destinationsRef.current.querySelectorAll('.destination-card');
    
    destCards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: destinationsRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        }
      });
      
      // Parallax effect on destination images
      gsap.to(card.querySelector('img'), {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    });
    
    // Testimonial carousel animation
    const testimonialItems = testimonialsRef.current.querySelectorAll('.testimonial-item');
    
    gsap.from(testimonialsRef.current.querySelector('h2'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top 75%"
      }
    });
    
    testimonialItems.forEach((item, index) => {
      gsap.from(item, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 60%"
        }
      });
    });
    
    // Video experience section animations
    videoRefs.current.forEach((video, index) => {
      gsap.from(video, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top 70%"
        }
      });
    });
    
    gsap.from(experienceRef.current.querySelector('.experience-content'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 60%"
      }
    });
    
    // Gallery images staggered reveal
    const galleryImages = galleryRef.current.querySelectorAll('.gallery-image');
    
    gsap.from(galleryImages, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 70%"
      }
    });
    
    // CTA section reveal and 3D hover effect
    gsap.from(ctaRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 80%"
      }
    });
    
    // Floating animation for icons
    const floatingElements = document.querySelectorAll('.floating');
    
    floatingElements.forEach((el, index) => {
      gsap.to(el, {
        y: index % 2 === 0 ? '-=20' : '+=20',
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });
    
    // Clean up ScrollTrigger instances on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Floating airplane animation */}
      <div ref={planeRef} className="fixed z-10 top-20 left-10 pointer-events-none" style={{ width: '80px' }}>
        <svg viewBox="0 0 24 24" className="text-blue-500 transform rotate-12">
          <path fill="currentColor" d="M22,16V14L13.5,9V3.5C13.5,2.67 12.83,2 12,2C11.17,2 10.5,2.67 10.5,3.5V9L2,14V16L10.5,13.5V19L8,20.5V22L12,21L16,22V20.5L13.5,19V13.5L22,16Z" />
        </svg>
      </div>
      
      {/* Hero Section with Video Background */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-image absolute inset-0 w-full h-full z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww" 
            alt="Travel landscape" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-overlay absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        <div className="hero-content relative z-20 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 ref={headingRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight"></h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Embark on life-changing journeys that transform your perspective and create memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/login" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-lg font-semibold tracking-wide transition-all hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 shadow-lg">
              Explore Destinations
            </Link>
            <Link to="/login" className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-lg font-semibold tracking-wide hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105">
              Plan Your Journey
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Why Travel With Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We craft experiences that blend adventure, luxury, and authenticity to create unforgettable memories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card group bg-white rounded-xl shadow-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-blue-500 text-5xl mb-6 floating">
                <span className="bg-blue-100 p-5 rounded-full inline-block">
                  🗺️
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">Curated Destinations</h3>
              <p className="text-gray-600">
                Our travel experts personally visit and curate every destination in our collection to ensure exceptional experiences.
              </p>
            </div>
            
            <div className="feature-card group bg-white rounded-xl shadow-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-emerald-500 text-5xl mb-6 floating">
                <span className="bg-emerald-100 p-5 rounded-full inline-block">
                  ✈️
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-emerald-600 transition-colors">Seamless Planning</h3>
              <p className="text-gray-600">
                From transportation to accommodations, our AI-powered platform handles all the details so you can focus on the experience.
              </p>
            </div>
            
            <div className="feature-card group bg-white rounded-xl shadow-xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl">
              <div className="text-amber-500 text-5xl mb-6 floating">
                <span className="bg-amber-100 p-5 rounded-full inline-block">
                  🏆
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-amber-600 transition-colors">Local Experiences</h3>
              <p className="text-gray-600">
                Connect with local guides and immerse yourself in authentic cultural experiences that go beyond typical tourism.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations Section */}
      <section ref={destinationsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Trending Destinations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most captivating places around the globe that are calling your name.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="destination-card group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww" 
                alt="Mountain landscape" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
                  Most Popular
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">Santorini, Greece</h3>
                <p className="mb-4 opacity-90">White-washed buildings, blue domes, and breathtaking sunsets</p>
                <Link to="/login" className="inline-flex items-center text-sm font-semibold tracking-wide">
                  Explore Location <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="destination-card group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww" 
                alt="Tropical beach" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
                  Trending
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">Bali, Indonesia</h3>
                <p className="mb-4 opacity-90">Lush rice terraces, sacred temples, and pristine beaches</p>
                <Link to="/login" className="inline-flex items-center text-sm font-semibold tracking-wide">
                  Explore Location <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
            
            <div className="destination-card group relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Italian coast" 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide mb-2 inline-block">
                  Hidden Gem
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-300 transition-colors">Cinque Terre, Italy</h3>
                <p className="mb-4 opacity-90">Colorful villages perched on dramatic coastal cliffs</p>
                <Link to="/login" className="inline-flex items-center text-sm font-semibold tracking-wide">
                  Explore Location <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/login" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold transition-all hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 shadow-lg">
              View All Destinations
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Traveler Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our community about their life-changing experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="testimonial-item bg-gray-800 p-8 rounded-xl relative">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                <svg className="text-blue-500 w-16 h-16 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 10v4h2.5c0 1.38-1.12 2.5-2.5 2.5H9V20h2c2.76 0 5-2.24 5-5v-5h-5zm-6 0v4h2.5c0 1.38-1.12 2.5-2.5 2.5H3V20h2c2.76 0 5-2.24 5-5v-5H5z"/>
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Testimonial author" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">Adventure Seeker</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "TravelApp transformed my solo trip to Japan. The curated experiences and local connections made me feel like I was experiencing the country through the eyes of a local, not just a tourist. I discovered hidden gems I would never have found on my own."
              </p>
              <div className="flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="testimonial-item bg-gray-800 p-8 rounded-xl relative">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                <svg className="text-blue-500 w-16 h-16 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 10v4h2.5c0 1.38-1.12 2.5-2.5 2.5H9V20h2c2.76 0 5-2.24 5-5v-5h-5zm-6 0v4h2.5c0 1.38-1.12 2.5-2.5 2.5H3V20h2c2.76 0 5-2.24 5-5v-5H5z"/>
                </svg>
              </div>
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1512757776214-26d36777b513?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Testimonial author" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Family Traveler</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Planning a family trip to Europe seemed overwhelming until I found TravelApp. The itinerary planning was seamless, and the kid-friendly recommendations were spot on. Our family created memories that will last a lifetime!"
              </p>
              <div className="flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Experience Section */}
      <section ref={experienceRef} className="py-20 bg-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-pattern" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="experience-content text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Experience the Magic <br/>of Travel</h2>
              <p className="text-xl text-indigo-200 mb-8">
                From the bustling streets of Tokyo to the serene beaches of the Maldives, our curated experiences connect you with the soul of each destination.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="bg-indigo-500 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-indigo-100">Immersive cultural experiences</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-500 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-indigo-100">Local guides with insider knowledge</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-500 p-1 rounded-full mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-indigo-100">Sustainable travel practices</span>
                </li>
              </ul>
              <Link to="/login" className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold transition-all hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 shadow-lg">
                Browse Experiences
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Travel experience" 
                  className="w-full h-full object-cover"
                  ref={el => { videoRefs.current[0] = el }}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Travel experience" 
                  className="w-full h-full object-cover"
                  ref={el => { videoRefs.current[1] = el }}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Travel experience" 
                  className="w-full h-full object-cover"
                  ref={el => { videoRefs.current[2] = el }}
                />
              </div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Travel experience" 
                  className="w-full h-full object-cover"
                  ref={el => { videoRefs.current[3] = el }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Photo Gallery Section */}
      <section ref={galleryRef} className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Capture The Moments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A glimpse of the breathtaking views and unforgettable moments awaiting you.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="gallery-image aspect-square overflow-hidden rounded-lg shadow-md col-span-1 row-span-1 transform transition-all hover:scale-105 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Travel moment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-image overflow-hidden rounded-lg shadow-md col-span-1 row-span-2 transform transition-all hover:scale-105 hover:shadow-xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsfGVufDB8fDB8fHww" 
                alt="Travel moment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-image overflow-hidden rounded-lg shadow-md col-span-2 row-span-1 transform transition-all hover:scale-105 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Travel moment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-image aspect-square overflow-hidden rounded-lg shadow-md col-span-1 row-span-1 transform transition-all hover:scale-105 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Travel moment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-image overflow-hidden rounded-lg shadow-md col-span-1 row-span-1 transform transition-all hover:scale-105 hover:shadow-xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1719843013722-c2f4d69db940?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Travel moment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="gallery-image overflow-hidden rounded-lg shadow-md col-span-1 row-span-1 transform transition-all hover:scale-105 hover:shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600721296496-bb850e5310ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwdmlkZW98ZW58MHx8MHx8fDA%3D" 
                alt="Travel moment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/login" className="inline-block px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-full font-medium transition-all hover:bg-blue-50 hover:shadow-md">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-full w-full bg-pattern" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Begin Your Adventure Today</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Join thousands of travelers who have transformed their travel dreams into unforgettable realities with TravelApp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/login" className="px-8 py-4 bg-white text-blue-700 rounded-full text-lg font-semibold tracking-wide hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                Create Free Account
              </Link>
              <Link to="/login" className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-lg font-semibold tracking-wide hover:bg-white hover:text-blue-700 transition-all transform hover:scale-105">
                Contact Our Team
              </Link>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">2M+</div>
                <p className="text-blue-100">Happy Travelers</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">150+</div>
                <p className="text-blue-100">Countries Covered</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">98%</div>
                <p className="text-blue-100">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <p className="text-blue-100">Travel Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-16 -mt-16 z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-100 rounded-full -ml-10 -mb-10 z-0"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-800">Get Travel Inspiration</h3>
                <p className="text-gray-600">
                  Sign up for our newsletter to receive exclusive deals, travel tips, and destination guides.
                </p>
              </div>
              
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4 text-center">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
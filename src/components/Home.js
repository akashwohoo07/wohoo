// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const headerRef = useRef(null);
  const featureRefs = useRef([]);
  const videoRefs = useRef([]);
  const galleryRef = useRef(null);
  const ctaRef = useRef(null);
  const testimonialRef = useRef(null);

  // Array of image URLs
  const imageUrls = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
  ];

  // Array of video URLs
  const videoUrls = [
    "https://videos.pexels.com/video-files/2169880/2169880-sd_640_360_30fps.mp4",
    "https://videos.pexels.com/video-files/3018542/3018542-sd_640_360_24fps.mp4",
    "https://videos.pexels.com/video-files/2257010/2257010-sd_640_360_24fps.mp4"
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Paris, France",
      text: "TravelApp made planning my European adventure so easy! I discovered hidden gems I would've never found otherwise."
    },
    {
      name: "Michael Chen",
      location: "Tokyo, Japan",
      text: "The itinerary features saved me hours of planning. Every detail was perfectly organized for my trip to Japan."
    },
    {
      name: "Elena Rodriguez",
      location: "Bali, Indonesia",
      text: "I've used many travel apps, but this one stands out. The wishlists feature helped me keep track of all the beautiful places in Bali."
    }
  ];

  // Popular destinations data
  const popularDestinations = [
    {
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1512757776214-26d36777b513?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Famous for its stunning sunsets, white-washed buildings, and blue domes."
    },
    {
      name: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Experience traditional Japanese culture, temples, and beautiful gardens."
    },
    {
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1553697388-94e804e2f0f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      description: "The ancient Incan citadel set high in the Andes Mountains."
    },
    {
      name: "Bora Bora, French Polynesia",
      image: "https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Crystal clear turquoise waters, overwater bungalows, and pristine beaches."
    }
  ];

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out"
    });

    // Features animation
    featureRefs.current.forEach((feature, index) => {
      gsap.from(feature, {
        scrollTrigger: {
          trigger: feature,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: "power2.out"
      });
    });

    // Video section animation
    videoRefs.current.forEach((video, index) => {
      gsap.from(video, {
        scrollTrigger: {
          trigger: video,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        delay: index * 0.3,
        ease: "back.out(1.7)"
      });
    });

    // Gallery animation
    gsap.from(galleryRef.current.children, {
      scrollTrigger: {
        trigger: galleryRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.7,
      ease: "power1.out"
    });

    // Popular destinations animation
    gsap.from(".destination-card", {
      scrollTrigger: {
        trigger: ".popular-destinations",
        start: "top 75%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 40,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });

    // Testimonials animation
    gsap.from(testimonialRef.current.children, {
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      x: -30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power1.out"
    });

    // CTA animation
    gsap.from(ctaRef.current, {
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    });

  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Background Video */}
      <div className="relative h-screen overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute w-full h-full object-cover"
          style={{ filter: 'brightness(0.7)' }}
        >
          <source src="https://videos.pexels.com/video-files/4133023/4133023-sd_640_360_30fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
        
        <div ref={headerRef} className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">Discover Your Next Adventure</h1>
          <p className="text-2xl text-white mb-10 max-w-2xl">
            Experience the world's most breathtaking destinations with personalized travel planning and insider recommendations.
          </p>
          <div className="space-x-4">
            <Link 
              to="/login" 
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-8 py-4 rounded-full text-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
            </Link>
            <Link 
              to="/discover" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-fuchsia-700 px-8 py-4 rounded-full text-xl font-medium transition-all duration-300"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Travel With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div 
              ref={el => featureRefs.current[0] = el} 
              className="bg-white rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-teal-500 text-5xl mb-6">
                🗺️
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Discover Hidden Gems</h3>
              <p className="text-gray-600 leading-relaxed">
                Uncover extraordinary places off the beaten path with our curated recommendations from local experts and seasoned travelers.
              </p>
            </div>
            
            <div 
              ref={el => featureRefs.current[1] = el} 
              className="bg-white rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-fuchsia-500 text-5xl mb-6">
                ✈️
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Effortless Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Create day-by-day itineraries with smart recommendations for activities, restaurants, and accommodations tailored to your preferences.
              </p>
            </div>
            
            <div 
              ref={el => featureRefs.current[2] = el} 
              className="bg-white rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-amber-500 text-5xl mb-6">
                📌
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Travel Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow travelers, share experiences, and get insider tips from a global community of passionate explorers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase Section */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-6">Inspiring Travel Moments</h2>
          <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto">
            Get inspired by breathtaking experiences from around the world
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoUrls.map((url, index) => (
              <div 
                key={index} 
                ref={el => videoRefs.current[index] = el}
                className="rounded-xl overflow-hidden shadow-2xl"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  className="w-full h-80 object-cover"
                >
                  <source src={url} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="container mx-auto px-4 popular-destinations">
          <h2 className="text-4xl font-bold text-center text-white mb-6">Popular Destinations</h2>
          <p className="text-xl text-center text-white mb-16 max-w-3xl mx-auto">
            Explore trending destinations loved by our community
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <div 
                key={index}
                className="destination-card bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600">{destination.description}</p>
                  <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Inspiring Travel Moments</h2>
          
          <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {imageUrls.map((url, index) => (
              <div 
                key={index}
                className="overflow-hidden rounded-lg shadow-md h-64 transform transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={url} 
                  alt={`Travel moment ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">What Our Travelers Say</h2>
          
          <div ref={testimonialRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-amber-500 text-2xl mr-2">★★★★★</div>
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Features */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Travel Smarter with Our App</h2>
              <p className="text-xl text-gray-600 mb-8">
                Download our mobile app and take your travel planning on the go. Access your itineraries offline, get real-time updates, and never miss a moment.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <span className="mr-2">🍎</span>
                  <div>
                    <p className="text-xs">Download on the</p>
                    <p className="text-lg font-semibold">App Store</p>
                  </div>
                </button>
                
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <span className="mr-2">🤖</span>
                  <div>
                    <p className="text-xs">Get it on</p>
                    <p className="text-lg font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-8 -right-8 w-80 h-80 bg-pink-500 rounded-full opacity-20"></div>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  className="relative z-10 rounded-xl shadow-2xl w-full"
                >
                  <source src="https://videos.pexels.com/video-files/4125025/4125025-sd_640_360_24fps.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="py-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Adventure Today</h2>
          <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
            Join our community of passionate travelers and turn your travel dreams into unforgettable memories.
          </p>
          <Link 
            to="/login" 
            className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sign Up for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
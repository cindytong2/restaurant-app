'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Import components with dynamic loading for better performance
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero'));
const Features = dynamic(() => import('@/components/Features'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Suspense fallback={<div className="h-screen bg-gray-100"></div>}>
          <Hero />
        </Suspense>
        
        {/* Features Section */}
        <Suspense fallback={<div className="h-96 bg-white"></div>}>
          <Features />
        </Suspense>
        
        {/* Testimonials Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50"></div>}>
          <Testimonials />
        </Suspense>
      </main>
      
      {/* Footer */}
      <Suspense fallback={<div className="h-64 bg-gray-900"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

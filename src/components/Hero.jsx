// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
              Ace Your IELTS Test with <span className="text-emerald-500">Confidence</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Join thousands of students who have achieved their desired band score with our expert-led courses, mock tests, and personalized feedback.
            </p>
            <div className="mt-8">
              <a 
                href="#" 
                className="inline-block bg-emerald-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-600 transition-transform transform hover:scale-105"
              >
                Start Your Free Trial
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="mt-10 md:mt-0">
            {/* Online image link is used here. You can also use a local image */}
            <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070" 
              alt="Students studying for IELTS" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
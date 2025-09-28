// src/components/Testimonials.jsx
import React from 'react';

const testimonialsData = [
  {
    quote: "The mock tests were a game-changer. I scored an 8.5 overall, which was beyond my dreams! Highly recommended.",
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "I struggled with Speaking, but the live practice sessions at Apex helped me gain confidence. Thank you for the 7.5 band!",
    name: "Rajesh Kumar",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "The personalized feedback on my writing tasks was incredibly detailed. It helped me improve my score from 6.0 to 7.0.",
    name: "Anjali Singh",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  }
];

const TestimonialCard = ({ quote, name, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <p className="text-slate-600 italic">"{quote}"</p>
    <div className="flex items-center mt-4">
      <img className="w-12 h-12 rounded-full" src={image} alt={name} />
      <div className="ml-4">
        <p className="font-semibold text-slate-800">{name}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">What Our Students Say</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
// src/components/Features.jsx
import React from 'react';
import { FaBullseye, FaLaptopCode, FaComments } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaLaptopCode size={30} />,
    title: 'AI-Powered Mock Tests',
    description: 'Experience real test conditions with our advanced platform and get instant, detailed feedback on your performance.'
  },
  {
    icon: <FaComments size={30} />,
    title: 'Live Speaking Practice',
    description: 'Practice speaking with certified trainers and other students in a supportive, interactive environment.'
  },
  {
    icon: <FaBullseye size={30} />,
    title: 'Personalized Study Plan',
    description: 'Get a customized study plan based on your strengths and weaknesses to focus on what matters most.'
  }
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="text-emerald-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800">Why Choose Apex IELTS?</h2>
          <p className="mt-2 text-lg text-slate-600">Everything you need to succeed, all in one place.</p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
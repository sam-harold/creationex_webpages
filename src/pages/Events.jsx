import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title="Events"
        subtitle="We exciting to see you!"
      />

      {/* Your Code Here! */}
      {/* Your Code Here! */}

      {/* Additional Section */}
      <section className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">More Content Coming Soon</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Stay tuned for more exciting updates from CreatioNeX
          </p>
        </div>
      </section>

      {/* Your Code Here! */}
      {/* Your Code Here! */}

      <Footer />
    </div>
  );
};

export default Events;

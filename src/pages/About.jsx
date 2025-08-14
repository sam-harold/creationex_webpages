import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import MainBanner from '../assets/main-banner.jpg';
import HeroSection from '../components/HeroSection.jsx';

const About = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <section className="min-h-[75vh] relative text-white overflow-hidden h-96">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/banner.jpg" alt="background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center text-center text-white p-8 lg:p-16 min-h-screen">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-48 lg:mt-32 mb-4 animate-bounce">Unite.<br />Develop.<br /><span className="text-orange-300">Transformation.</span></h1>
          <p className="text-md md:text-lg lg:text-xl text-white/80 max-w-lg pb-8">Where developers connect and flourish through shared experiences.</p>
        </div>
      </section>

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

export default About;

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Local imports
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import events and slides data
import { UPCOMING_EVENTS } from '../data/events';
import { HOMEPAGE_SLIDES } from '../data/slides';
import { PUBLISHED_CONTENTS } from '../data/publishings';
import AnimatedSection from '../components/AnimatedSection.jsx';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide configuration
  const SLIDE_INTERVAL = 3000; // 3s

  // Upcoming Event Picker (By Soonest Date)
  const nextUpcomingEvent = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const futureEvents = UPCOMING_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return event.active && eventDate >= today;
    }).sort((a, b) => new Date(a.date) - new Date(b.date));

    return futureEvents.length > 0 ? futureEvents[0] : null;
  }, []);

  // Slides of events
  const slides = HOMEPAGE_SLIDES;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-slide effect - continuous loop
  useEffect(() => {
    if (!isHovered && slides.length > 1) {
      const interval = setInterval(nextSlide, SLIDE_INTERVAL);
      return () => clearInterval(interval);
    }
  }, [isHovered, slides.length, nextSlide]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <AnimatedSection animationType="fadeIn" delay={0} className="min-h-[calc(100vh-72px)] flex flex-col lg:flex-row">
        {/* Left Panel - Hero Section */}
        <div className="w-full lg:w-1/2 h-[90vh] lg:h-auto flex flex-col justify-center p-6 md:p-8 lg:p-16 relative bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${'/banner.jpg'})`, }}>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-8 leading-tight">
              Unite.
              <br />
              Develop.
              <br />
              <span className="text-orange-300">Transformation.</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-4 md:mb-8 max-w-md">
              Nurturing the next generation of tech leaders.
            </p>
          </div>

          {/* Upcoming Event Card - Only show if there's a next event */}
          {nextUpcomingEvent && (
            <div className="mt-8 lg:mt-8">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 md:p-6">
                <div className="flex items-center mb-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-red-500 text-sm font-medium animate-pulse">
                    UPCOMING EVENT
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {nextUpcomingEvent.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-3">
                  {nextUpcomingEvent.description}
                </p>
                <p className="text-gray-400 text-xs md:text-sm mb-3">
                  {nextUpcomingEvent.displayDate} | {nextUpcomingEvent.venue}
                </p>
                {nextUpcomingEvent.learnMoreLink && (
                  <Link
                    to={nextUpcomingEvent.learnMoreLink}
                    className="text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium transition-colors inline-block"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Events Slider */}
        <div
          className="w-full lg:w-1/2 h-[90vh] lg:h-auto flex flex-col relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index < currentSlide
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                }`}
              >
                <div
                  className="h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-12">
                    {slide.subtitle && (
                      <div className="mb-2 md:mb-4">
                        <span
                          className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs font-medium ${
                            slide.subtitle === 'COMING SOON'
                              ? 'bg-red-500 text-white'
                              : 'bg-orange-500 text-white'
                          }`}
                        >
                          {slide.subtitle === 'COMING SOON' && (
                            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                          )}
                          {slide.subtitle}
                        </span>
                      </div>
                    )}
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-gray-200 mb-3 md:mb-6 text-xs md:text-sm lg:text-base leading-relaxed">
                      {slide.description}
                    </p>
                    {slide.details && (
                      <p className="text-gray-300 mb-3 md:mb-6 text-xs md:text-sm border-t border-gray-600 pt-2 md:pt-4">
                        {slide.details}
                      </p>
                    )}
                    {slide.learnMoreLink && (
                      <Link
                        to={slide.learnMoreLink}
                        className="text-blue-400 hover:text-blue-300 text-xs md:text-sm font-medium transition-colors self-start"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full transition-all duration-200 z-10 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full transition-all duration-200 z-10 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </AnimatedSection>

      {/* Publishing's Section */}
      <section className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Student Voices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real events, real insights — experience the student journey that
              shapes tech leaders.
            </p>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PUBLISHED_CONTENTS.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={item.image || '/placeholder.jpg'}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-600 font-medium mb-1">
                    {item.displayDate}
                  </div>

                  <h3 className="text-xl font-semibold text-black mb-2 truncate">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  <Link
                    to={item.learnMoreLink}
                    className="text-sm font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

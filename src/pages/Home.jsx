import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

// Local imports
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainBanner from '../assets/main-banner.jpg';
import Sponsor1 from '../assets/sponsors/1.png';
import Sponsor2 from '../assets/sponsors/2.png';
import Sponsor3 from '../assets/sponsors/3.png';
import Sponsor4 from '../assets/sponsors/4.png';
import Sponsor5 from '../assets/sponsors/5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import events and slides data
import { UPCOMING_EVENTS } from '../data/events';
import { HOMEPAGE_SLIDES } from '../data/slides';
import { RECENT_EVENTS } from '../data/recentEvents';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import AnimatedSection from '../components/AnimatedSection.jsx';
import StaggerContainer from '../components/StaggerContainer.jsx';

const Home = () => {
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

  // Get featured events for mobile preview
  const featuredEvents = useMemo(() => {
    return slides.slice(0, 3); // Show the first 3 slides as featured events
  }, [slides]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Superhero Section */}
      <section className="min-h-[calc(100vh-72px)] flex flex-col lg:flex-row">
        {/* Left Panel - Hero Section */}
        <div
          className="w-full lg:w-1/2 min-h-[calc(100vh-72px)] lg:h-auto flex flex-col justify-center p-6 md:p-8 lg:p-16 relative bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${MainBanner})`,
          }}
        >
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-5xl mb-4 md:mb-8 leading-tight">
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
                    className="text-blue-400 hover:text-purple-400 text-xs md:text-sm font-medium transition-colors inline-block"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Events Slider (Desktop Only) */}
        <div className="hidden lg:block w-full lg:w-1/2 lg:h-auto relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.hero-swiper-button-prev',
              nextEl: '.hero-swiper-button-next',
            }}
            pagination={{
              el: '.hero-swiper-pagination',
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active',
              bulletClass: 'swiper-pagination-bullet',
            }}
            loop={slides.length > 1}
            speed={1000}
            className="h-full w-full"
            style={{ height: '100%' }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="h-full bg-cover bg-center relative"
                  style={{
                    backgroundImage: `url(${slide.image}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
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
                        className="text-blue-400 hover:text-purple-400 text-xs md:text-sm font-medium transition-colors self-start"
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <button className="hero-swiper-button-prev absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full transition-all duration-200 z-10 hover:scale-110">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="hero-swiper-button-next absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 md:p-3 rounded-full transition-all duration-200 z-10 hover:scale-110">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Custom Pagination */}
            <div className="hero-swiper-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10"></div>
          </Swiper>
        </div>
      </section>

      {/* Mobile-Only Featured Events Section */}
      <section className="lg:hidden bg-black p-4 relative">
        <div className="max-w-7xl mx-auto">
          {/* Events Slider */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop={true}
            navigation={{
              prevEl: '.mobile-swiper-button-prev',
              nextEl: '.mobile-swiper-button-next',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="recent-events-swiper"
          >
            {featuredEvents.map((event) => (
              <SwiperSlide key={event.id} className="flex">
                <div className="bg-black overflow-hidden transition-all duration-300 flex flex-col">
                  {/* Event Image */}
                  <div
                    className="h-40 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${event.image || '/placeholder.jpg'}?auto=compress&cs=tinysrgb&h=350)`,
                    }}
                  ></div>

                  {/* Event Content */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium mb-2 ${
                          event.subtitle === 'COMING SOON'
                            ? 'bg-red-500 text-white'
                            : event.subtitle
                              ? 'bg-orange-500 text-white'
                              : 'bg-blue-500 text-white'
                        }`}
                      >
                        {event.subtitle || 'FEATURED'}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">
                        {event.title}
                      </h3>
                      <p className="text-gray-100 text-sm line-clamp-2">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <button className="mobile-swiper-button-prev absolute left-2 top-1/4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full z-10">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="mobile-swiper-button-next absolute right-2 top-1/4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full z-10">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </Swiper>
        </div>
      </section>

      {/* Recent Events Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <AnimatedSection
            animationType="fadeUp"
            delay={0}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Recent Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check out the latest professional development and
              community-building events hosted by{' '}
              <span className="text-orange-400 font-heading">CreatioNeX</span>.
            </p>
          </AnimatedSection>

          {/* Recent Event Cards Grid */}
          <StaggerContainer
            staggerDelay={150}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 text-black"
          >
            {RECENT_EVENTS.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <img
                  src={
                    item.image
                      ? `${item.image}?auto=compress&cs=tinysrgb&h=350`
                      : '/placeholder.jpg'
                  }
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />

                {/* Card Content */}
                <div className="p-6">
                  <div className="text-sm text-gray-600 font-medium my-2">
                    {item.displayDate}
                  </div>

                  <h3 className="text-xl font-semibold text-black my-2 truncate">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3 mb-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerContainer>

          <div className="flex justify-center mt-8">
            <Link
              to="/events"
              className="bg-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-200 transform hover:scale-105"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-gray-200 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Sponsors
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're grateful for the support that makes our mission possible. If
            you are interested in sponsoring us,{' '}
            <Link
              to="/contact"
              className="underline text-blue-400 hover:text-purple-400"
            >
              please reach out!
            </Link>
          </p>

          {/* Sponsors Slider */}
          <div className="w-full max-w-5xl mx-auto">
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 25 },
                1024: { slidesPerView: 5, spaceBetween: 30 },
              }}
              className="sponsors-swiper"
            >
              {[
                { src: Sponsor1, alt: 'Sponsor 1' },
                { src: Sponsor2, alt: 'Sponsor 2' },
                { src: Sponsor3, alt: 'Sponsor 3' },
                { src: Sponsor4, alt: 'Sponsor 4' },
                { src: Sponsor5, alt: 'Sponsor 5' },
              ].map((sponsor, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center justify-center h-24">
                    <img
                      src={sponsor.src}
                      alt={sponsor.alt}
                      className="h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import { useNavigate } from 'react-router-dom';
import { UPCOMING_EVENTS } from '../data/events.js';
import AnimatedSection from '../components/AnimatedSection.jsx';
import StaggerContainer from '../components/StaggerContainer.jsx';

const Events = () => {
  const navigate = useNavigate();
  const [sortOrder, setSortOrder] = useState('earliest'); // Default: earliest to latest

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  // Sort events based on sortOrder
  const sortedEvents = [...UPCOMING_EVENTS]
    .filter((event) => event.active) // Keep only active events
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'earliest' ? dateA - dateB : dateB - dateA;
    });

  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'earliest' ? 'latest' : 'earliest');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection title="Events" subtitle="We exciting to see you!" />

      {/* Events List Component */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <AnimatedSection
          animationType="fadeUp"
          delay={0}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for exciting tech events, workshops and networking
            opportunities
          </p>
          {/* Sort Toggle Button */}
          <button
            onClick={toggleSortOrder}
            className="mt-4 bg-white text-gray-900 border-2 border-gray-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
          >
            Sort by :{' '}
            {sortOrder === 'earliest'
              ? 'Earliest to Later'
              : 'Later to Earliest'}
          </button>
        </AnimatedSection>

        <StaggerContainer
          staggerDelay={0}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {sortedEvents.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                !event.active ? 'opacity-75' : ''
              } flex flex-col h-full`}
            >
              {/* Event Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {event.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Event Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.displayDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.venue}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => handleEventClick(event.id)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    event.active
                      ? 'bg-orange-600 text-white hover:bg-orange-700 transform hover:scale-105'
                      : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  } mt-auto`}
                  disabled={!event.active}
                >
                  {event.active ? 'View Details' : 'Event Inactive'}
                </button>
              </div>
            </div>
          ))}
        </StaggerContainer>

        {/* Empty State */}
        {sortedEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No Events Available
            </h3>
            <p className="text-gray-500">
              Check back later for upcoming events!
            </p>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-orange-500 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Be the first to know about new events! Subscribe to our email
            newsletters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-2 border-white/20 px-4 py-3 rounded-lg text-gray-50"
            />
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import { UPCOMING_EVENTS } from '../data/events.js';

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Debug logging
    console.log('EventDetails - eventId from URL:', eventId);
    console.log('EventDetails - Available events:', UPCOMING_EVENTS);

    // Simulate loading delay (remove in production)
    const timer = setTimeout(() => {
      // Find event by ID - handle both string and numeric IDs
      let foundEvent = UPCOMING_EVENTS.find(e =>
        e.id === eventId || e.id === parseInt(eventId)
      );

      console.log('EventDetails - Found event:', foundEvent);

      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        setError(`Event not found for ID: ${eventId}`);
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [eventId]);

  // useEffect(() => {
  //   // Find event by ID - handle both string and numeric IDs
  //   let foundEvent = UPCOMING_EVENTS.find(e =>
  //     e.id === eventId || e.id === parseInt(eventId)
  //   );
  //
  //   if (foundEvent) {
  //     setEvent(foundEvent);
  //   } else {
  //     setError(`Event not found for ID: ${eventId}`);
  //   }
  //
  //   setLoading(false);
  // }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-32 w-32 border-b-5 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">Sorry, the event you're looking for doesn't exist.</p>
          <Link
            to="/events"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Events
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title={event.title}
        subtitle="Join us for this amazing event!"
      />

      {/* Event Details Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Event Image */}
          {event.image && (
            <div className="mb-8">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Event Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About This Event</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {event.description || event.longDescription ||
                  "Join us for an incredible experience that you won't want to miss. This event brings together passionate individuals to create meaningful connections and lasting impact."}
              </p>

              {/* Event Highlights */}
              {event.highlights && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">What You'll Experience</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Speakers/Organizers */}
              {event.speakers && event.speakers.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Featured Speakers</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800">{speaker.name}</h4>
                        <p className="text-sm text-gray-600">{speaker.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Event Details Sidebar */}
            <div className="bg-gray-50 p-6 rounded-lg h-fit">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Details</h3>

              <div className="space-y-4">
                {/* Date */}
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Date</p>
                    <p className="text-gray-600">{event.displayDate || event.date}</p>
                  </div>
                </div>

                {/* Venue (replaces Location) */}
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Venue</p>
                    <p className="text-gray-600">{event.venue || event.location}</p>
                  </div>
                </div>

                {/* Event Status */}
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-800">Status</p>
                    <p className="text-gray-600">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {event.active ? 'Active' : 'Inactive'}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                {event.active ? (
                  <Link
                    to={`/rsvp/${eventId}`}
                    className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
                  >
                    RSVP Now
                  </Link>
                ) : (
                  <div className="block w-full bg-gray-400 text-white text-center py-3 px-4 rounded-lg cursor-not-allowed font-medium">
                    Event Inactive
                  </div>
                )}

                <button
                  onClick={() => window.history.back()}
                  className="block w-full bg-gray-200 text-gray-700 text-center py-3 px-4 rounded-lg hover:bg-gray-300 transition duration-300"
                >
                  Go Back
                </button>

                <Link
                  to="/events"
                  className="block w-full text-blue-600 text-center py-2 hover:text-blue-800 transition duration-300"
                >
                  View All Events
                </Link>
              </div>
            </div>
          </div>

          {/* Contact or Additional Info */}
          {event.contact && (
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Need More Information?</h3>
              <p className="text-gray-600 mb-2">
                Contact us at: <span className="font-medium">{event.contact}</span>
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetails;
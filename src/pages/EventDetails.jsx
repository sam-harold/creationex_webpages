import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, CheckCircle, Loader2 } from 'lucide-react';
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
    // Simulate loading delay (Please remove in production)
    const timer = setTimeout(() => {
      // Find event by ID - handle both string and numeric IDs
      let foundEvent = UPCOMING_EVENTS.find(
        (e) => e.id === eventId || e.id === parseInt(eventId)
      );

      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        setError(`Event not found for ID: ${eventId}`);
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [eventId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[400px]">
          <Loader2 className="w-24 h-24 text-orange-600 animate-spin" />
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Event Not Found
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, the event you're looking for doesn't exist.
          </p>
          <Link
            to="/events"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition duration-300"
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

      {/* Event Details Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Event Image */}
          {event.image && (
            <div className="mb-8">
              <img
                src={
                  event.image
                    ? `${event.image}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
                    : '/placeholder.jpg'
                }
                alt={event.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {event.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {event.description ||
                "Join us for an incredible experience that you won't want to miss. This event brings together passionate individuals to create meaningful connections and lasting impact."}
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Event Details
            </h3>
            <div className="space-y-4">
              {/* Date */}
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Date</p>
                  <p className="text-gray-600">
                    {event.displayDate || event.date}
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Venue</p>
                  <p className="text-gray-600">
                    {event.venue || event.location}
                  </p>
                </div>
              </div>

              {/* Event Status */}
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Status</p>
                  <p className="text-gray-600">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.active
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {event.active ? 'Active' : 'Inactive'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 space-y-3">
            {event.active ? (
              <Link
                to={`/events/rsvp/${eventId}`}
                className="block w-full bg-orange-600 text-white text-center py-3 px-4 rounded-lg hover:bg-orange-700 transition duration-300 font-medium"
              >
                Join Now
              </Link>
            ) : (
              <div className="block w-full bg-gray-400 text-white text-center py-3 px-4 rounded-lg cursor-not-allowed font-medium">
                Event Inactive
              </div>
            )}

            <Link
              to="/events"
              className="block w-full text-blue-400 text-center py-2 hover:text-purple-400 underline transition duration-300"
            >
              View All Events
            </Link>
          </div>

          {/* Long Description */}
          {event.longDescription && (
            <div className="my-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                More Details
              </h2>
              <p className="text-gray-600 leading-relaxed text-justify">
                {event.longDescription}
              </p>
            </div>
          )}

          {/* Event Highlights */}
          {event.highlights && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What You'll Experience
              </h3>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Featured Speakers
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {event.speakers.map((speaker, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-800">
                      {speaker.name}
                    </h4>
                    <p className="text-sm text-gray-600">{speaker.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact or Additional Info */}
          {event.contact && (
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Need More Information?
              </h3>
              <p className="text-gray-600 mb-2">
                Contact us at:{' '}
                <a
                  href="mailto:contact@creationex.org"
                  className="font-medium hover:text-blue-400 transition-colors"
                >
                  {event.contact}
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;

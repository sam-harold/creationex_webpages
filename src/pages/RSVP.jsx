import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import { UPCOMING_EVENTS } from '../data/events.js';

const RSVP = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  useEffect(() => {
    console.log('RSVP - eventId from URL:', eventId);
    console.log('RSVP - Available events:', UPCOMING_EVENTS);

    const timer = setTimeout(() => {
      let foundEvent = UPCOMING_EVENTS.find(
        (e) => e.id === eventId || e.id === parseInt(eventId)
      );

      console.log('RSVP - Found event:', foundEvent);

      if (foundEvent) {
        setEvent(foundEvent);
      } else {
        setError(`Event not found for ID: ${eventId}`);
      }

      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email) {
        setFormStatus({
          submitting: false,
          success: true,
          error: null,
        });
        // Reset form
        setFormData({ name: '', email: '', phone: '' });
        // Redirect after 2 seconds
        setTimeout(() => navigate(`/events/${eventId}`), 2000);
      } else {
        setFormStatus({
          submitting: false,
          success: false,
          error: 'Please fill in all required fields.',
        });
      }
    }, 1000);
  };

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

  if (!event.active) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Event Inactive
          </h2>
          <p className="text-gray-600 mb-8">
            Sorry, registration is closed for this event.
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

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Event Summary */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              RSVP for {event.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Please fill out the form below to register for this event.
            </p>
          </div>

          {/* Event Details */}
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Event Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Date</p>
                  <p className="text-gray-600">
                    {event.displayDate || event.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Venue</p>
                  <p className="text-gray-600">
                    {event.venue || event.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">Status</p>
                  <p className="text-gray-600">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RSVP Form */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Registration Form
            </h3>
            {formStatus.success ? (
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-green-600 mb-4">
                  Registration Successful!
                </h4>
                <p className="text-gray-600 mb-4">
                  Thank you for registering for {event.title}. You'll receive a
                  confirmation email soon.
                </p>
                <Link
                  to={`/events/${eventId}`}
                  className="bg-orange-600 text-white px-6 py-4 rounded-lg hover:bg-orange-700 transition duration-300"
                >
                  Back to Event
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-800 font-medium mb-1"
                  >
                    Full Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-800 font-medium mb-1"
                  >
                    Email <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-800 font-medium mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                  />
                </div>
                {formStatus.error && (
                  <p className="text-red-600">{formStatus.error}</p>
                )}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className={`w-full py-3 px-4 rounded-lg text-white font-medium transition duration-300 ${
                    formStatus.submitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  {formStatus.submitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      Submitting...
                    </span>
                  ) : (
                    'Register Now'
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Back Button */}
          <div className="mt-6">
            <Link
              to={`/events/${eventId}`}
              className="block w-full text-blue-400 text-center py-2 hover:text-purple-400 underline transition duration-300"
            >
              Back to Event Details
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RSVP;

import React, { useState } from 'react';
import { MapPin, Calendar, Users, Camera, Heart, MessageCircle, Share2 } from 'lucide-react';
import Header from '../components/Header';
import MainBanner from '../assets/main-banner.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      id: 1,
      image: MainBanner,
      title: 'Rooftop Yoga Session',
      description: 'Join us for morning yoga with city views',
      time: '2 hours ago',
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      image: MainBanner,
      title: 'Community BBQ Night',
      description: "Last night's rooftop BBQ was incredible!",
      time: '5 hours ago',
      likes: 42,
      comments: 15,
    },
    {
      id: 3,
      image: MainBanner,
      title: 'Art Workshop Success',
      description: 'Creative minds came together for pottery',
      time: '1 day ago',
      likes: 18,
      comments: 6,
    },
    {
      id: 4,
      image: MainBanner,
      title: 'Monthly Mixer',
      description: 'New members welcomed at our social mixer',
      time: '2 days ago',
      likes: 35,
      comments: 12,
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Wine Tasting Evening',
      date: 'Jul 5, 2025',
      time: '7:00 PM',
      location: 'Rooftop Terrace',
    },
    {
      id: 2,
      title: 'Morning Meditation',
      date: 'Jul 6, 2025',
      time: '8:00 AM',
      location: 'Zen Garden',
    },
    {
      id: 3,
      title: 'Cooking Class',
      date: 'Jul 8, 2025',
      time: '6:30 PM',
      location: 'Kitchen Studio',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${MainBanner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white p-8 lg:p-16 min-h-screen">
          <h1 className="text-5xl lg:text-7xl font-light mb-8 leading-tight">
            Unite.
            <br />
            Develop.
            <br />
            Transformation.
          </h1>

          <p className="text-xl text-white/80 max-w-md mb-8">
            Where developers connect and flourish through shared experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border border-white/50 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* News & Updates Section */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab('news')}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                  activeTab === 'news'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Camera className="w-5 h-5 inline mr-2" />
                Club News
              </button>
              <button
                onClick={() => setActiveTab('events')}
                className={`flex-1 px-6 py-4 text-center font-medium transition-colors ${
                  activeTab === 'events'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Events
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="min-h-screen">
            {activeTab === 'news' && (
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {newsItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{item.time}</span>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{item.comments}</span>
                          </div>
                          <Share2 className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'events' && (
              <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6 border-l-4 border-teal-400"
                    >
                      <h3 className="font-semibold text-lg mb-2">
                        {event.title}
                      </h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {event.date} at {event.time}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <button className="mt-4 bg-teal-400 text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-teal-300 transition-colors">
                        RSVP Now
                      </button>
                    </div>
                  ))}

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg text-center">
                    <Users className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <h3 className="font-semibold mb-2">
                      Want to Host an Event?
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Share your passion with the community
                    </p>
                    <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                      Propose Event
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import {
  Users,
  Heart,
  BookOpen,
  GitBranch,
  Trophy,
  Target,
  Sparkles,
  Lightbulb,
} from 'lucide-react';
import {
  currentInitiatives,
  upcomingInitiatives,
  pastInitiatives,
} from '../data/initiatives';
import StaggerContainer from '../components/StaggerContainer.jsx';

const Initiatives = () => {
  const [activeTab, setActiveTab] = useState('current');

  const getInitiativesByTab = () => {
    switch (activeTab) {
      case 'current':
        return currentInitiatives;
      case 'upcoming':
        return upcomingInitiatives;
      case 'past':
        return pastInitiatives;
      default:
        return currentInitiatives;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Planning':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Mentorship':
        return <Users className="w-5 h-5 text-indigo-600" />;
      case 'Open Source':
        return <GitBranch className="w-5 h-5 text-purple-600" />;
      case 'Social Impact':
        return <Heart className="w-5 h-5 text-rose-600" />;
      case 'Education':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'Competition':
        return <Trophy className="w-5 h-5 text-yellow-600" />;
      case 'Diversity':
        return <Sparkles className="w-5 h-5 text-pink-600" />;
      case 'Wellness':
        return <Heart className="w-5 h-5 text-green-600" />;
      default:
        return <Lightbulb className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection
        title="Our Initiatives"
        subtitle="Driving innovation and growth through community-focused programs and projects"
      />

      {/* Overview Stats */}
      <section className="py-16 bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">12+</h3>
              <p className="text-gray-600">Active Initiatives</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">500+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">240+</h3>
              <p className="text-gray-600">Participants</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">8</h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Content */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center space-x-1 bg-gray-100 rounded-lg p-1 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('current')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'current'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Current
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'upcoming'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'past'
                  ? 'bg-white text-orange-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Past
            </button>
          </div>
        </div>

        {/* Initiatives Grid */}
        <StaggerContainer
          staggerDelay={50}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {getInitiativesByTab().map((initiative) => (
            <div
              key={initiative.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={
                    initiative.image
                      ? `${initiative.image}?auto=compress&cs=tinysrgb&h=350`
                      : '/placeholder.jpg'
                  }
                  alt={initiative.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(initiative.status)}`}
                  >
                    {initiative.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2">
                    {getCategoryIcon(initiative.category)}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-orange-600">
                      {initiative.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {initiative.description}
                  </p>
                </div>

                {/* Stats/Info */}
                <div className="mb-4 space-y-2">
                  {activeTab === 'current' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Participants:</span>
                        <span className="font-medium">
                          {initiative.participants}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium">
                          {initiative.duration}
                        </span>
                      </div>
                      {initiative.impact && (
                        <div className="text-sm">
                          <span className="text-gray-500">Impact:</span>
                          <p className="text-green-600 font-medium mt-1">
                            {initiative.impact}
                          </p>
                        </div>
                      )}
                    </>
                  )}

                  {activeTab === 'upcoming' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Launch Date:</span>
                        <span className="font-medium">
                          {initiative.launchDate}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          Expected Participants:
                        </span>
                        <span className="font-medium">
                          {initiative.expectedParticipants}
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === 'past' && (
                    <>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Participants:</span>
                        <span className="font-medium">
                          {initiative.participants}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium">
                          {initiative.duration}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Features/Achievements */}
                {(initiative.features || initiative.achievements) && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      {activeTab === 'past'
                        ? 'Key Achievements:'
                        : 'Key Features:'}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(initiative.features || initiative.achievements)
                        ?.slice(0, 3)
                        .map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {initiative.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition duration-200 transform hover:scale-105">
                  {activeTab === 'current' && 'Join Initiative'}
                  {activeTab === 'upcoming' && 'Get Notified'}
                  {activeTab === 'past' && 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-red-600 via-orange-500 to-orange-400 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have an Initiative Idea?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            We're always looking for new ways to serve our community. Share your
            ideas and let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200 transform hover:scale-105">
              Propose Initiative
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 transform hover:scale-105">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Initiatives;

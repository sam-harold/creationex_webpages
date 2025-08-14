import React from 'react';
import Header from '../components/Header';
import MainBanner from '../assets/main-banner.jpg';
import AnimatedSection from '../components/AnimatedSection.jsx';
import StaggerContainer from '../components/StaggerContainer.jsx';
import HeroSection from '../components/HeroSection.jsx';
import Footer from '../components/Footer.jsx'; // Import your image

const Team = () => {
  const advisoryMemberItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&face',
      name: 'Sam Harold',
      title: 'Student | SOC, UBO',
      position: 'Head of CreatioNeX',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&face',
      name: 'Nadzmirul Izzad',
      title: 'Lecturer II | SOC, UBO',
      position: 'Patron Advisor',
    },
  ];

  const boardMemberItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&face',
      name: 'Muhammad Syahir',
      position: 'Peasant',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&face',
      name: 'Janwell Edmaxron',
      position: 'Peasant',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&face',
      name: 'Jude Jerry',
      position: 'Peasant',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&face',
      name: 'Ibragimova Diiara',
      position: 'Peasant',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=300&fit=crop&face',
      name: 'Carlson',
      position: 'Peasant',
    }
  ];

  // Component for member card to avoid repetition
  const MemberCard = ({ member, showTitle = false }) => (
    <div
      key={member.id}
      className="text-center flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
    >
      <div className="w-72 h-48 mb-6 rounded-xl overflow-hidden bg-gray-400 shadow-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {member.name}
      </h3>
      <p className="text-blue-600 font-medium">{member.position}</p>
      {showTitle && member.title && (
        <p className="text-gray-600 text-sm mt-1">{member.title}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection
        title="The Team"
        subtitle="Meet People Behind Our Success"
      />

      {/* Meet the Advisory Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection
            animationType="fadeUp"
            delay={0}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders guiding our organization towards excellence
            </p>
          </AnimatedSection>

          <StaggerContainer
            staggerDelay={150}
            className="flex flex-wrap justify-center gap-8"
          >
            {advisoryMemberItems.map((member) => (
              <MemberCard key={member.id} member={member} showTitle={true} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Meet the Board Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Board Members
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated individuals working together to achieve our mission
            </p>
          </div>

          <StaggerContainer
            staggerDelay={150}
            className="flex flex-wrap justify-center gap-8"
          >
            {boardMemberItems.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

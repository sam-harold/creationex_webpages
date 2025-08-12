import React from 'react';
import Header from '../components/Header';
import MainBanner from '../assets/main-banner.jpg';
import AnimatedSection from '../components/AnimatedSection.jsx';
import StaggerContainer from '../components/StaggerContainer.jsx'; // Import your image

const Team = () => {
  const advisoryMemberItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&face',
      name: 'Sam Harold',
      title: 'Student, UBO',
      position: 'Head of CreatioNeX',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&face',
      name: 'To Be Announced',
      title: 'Dean, FOIT',
      position: 'Patron Advisor',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=300&fit=crop&face',
      name: 'To Be Announced',
      title: 'Former President',
      position: 'Alumni Advisor',
    },
  ];

  const boardMemberItems = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&face',
      name: 'Lau Jia Mun',
      position: 'President',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&face',
      name: 'MD Nazmul',
      position: 'Vice President I',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&face',
      name: 'Jude Jerry',
      position: 'Vice President II',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&face',
      name: 'Ibragimova Diiara',
      position: 'Vice President III',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=300&fit=crop&face',
      name: 'Sam Harold',
      position: 'Vice President IV',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&face',
      name: 'Muhammad Affan',
      position: 'Secretary I',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&face',
      name: 'Dinesh Rao',
      position: 'Secretary II',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop&face',
      name: 'Ahmad Ali',
      position: 'Treasurer I',
    },
    {
      id: 9,
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&face',
      name: 'Kellcie Johanity',
      position: 'Treasurer II',
    },
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

      {/* Hero Section */}
      <section className="min-h-[calc(100vh-72px)] relative text-white overflow-hidden h-96">
        <div className="absolute inset-0">
          <img
            src={MainBanner}
            alt="Team hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center h-full px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Our Team
            </h1>
            <p className="text-xl mt-4 text-white/90">
              Meet the people behind our success
            </p>
          </div>
        </div>
      </section>

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {boardMemberItems.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

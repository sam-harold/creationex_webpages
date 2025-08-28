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
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Nadzmirul Izzad',
      title: 'Lecturer II | SOC, UBO',
      position: 'Patron Advisor',
    },
  ];

  const boardMemberItems = [
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Sam Harold',
      position: 'Head of CreatioNeX',
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Janwell Edmaxron',
      position: 'Logistics Lead',
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Muhammad Syahir',
      position: 'Finance Lead',
    },
    {
      id: 4,
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Seydna Ali',
      position: 'Public Relations Lead',
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Selvam Mani',
      position: 'Technical Lead',
    },
    {
      id: 5,
      image:
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png',
      name: 'Muhammad Alyas',
      position: 'Creativity Lead',
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
      <p className="text-orange-600 font-medium">{member.position}</p>
      {showTitle && member.title && (
        <p className="text-gray-600 text-sm mt-1">{member.title}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection title="The Team" subtitle="Meet People Behind Our Success" />

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
            staggerDelay={50}
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
              Executive Team
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

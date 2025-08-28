import React from 'react';
import { Users, Lightbulb, Globe, Zap, CheckCircle, Eye } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer.jsx';
import MainBanner from '../assets/main-banner.jpg';
import StaggerContainer from '../components/StaggerContainer.jsx';
import AnimatedSection from '../components/AnimatedSection.jsx';

const About = () => {
  // Values data
  const values = [
    {
      icon: <Users className="w-8 h-8" aria-hidden="true" />,
      title: 'Community First',
      description:
        'We believe in the power of community to drive innovation and personal growth in technology.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" aria-hidden="true" />,
      title: 'Innovation & Learning',
      description:
        'We foster an environment where curiosity thrives and continuous learning is encouraged.',
    },
    {
      icon: <Globe className="w-8 h-8" aria-hidden="true" />,
      title: 'Inclusivity & Diversity',
      description:
        'We welcome developers from all backgrounds and experience levels to join our community.',
    },
    {
      icon: <Zap className="w-8 h-8" aria-hidden="true" />,
      title: 'Excellence & Impact',
      description:
        'We strive for excellence in everything we do and aim to make a positive impact in the tech industry.',
    },
  ];

  // Statistics data
  const stats = [
    { number: '500+', label: 'Community Members' },
    { number: '50+', label: 'Events Organized' },
    { number: '25+', label: 'Workshop Sessions' },
    { number: '3+', label: 'Years Active' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      {/* Custom Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={MainBanner}
            alt="background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center text-center text-white p-8 lg:p-16 min-h-screen">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mt-48 lg:mt-32 mb-4">
            Unite.
            <br />
            Develop.
            <br />
            <span className="text-orange-300">Transformation.</span>
          </h1>
          <p className="text-md md:text-lg lg:text-xl text-white/80 max-w-lg pb-8">
            Where developers connect and flourish through shared experiences.
          </p>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="items-center justify-center bg-gray-100 py-20 px-4">
        <div className="text-center">
          <p className="text-orange-600 text-xl md:text-3xl max-w-2xl mx-auto italic">
            “Humans are allergic to change. They love to say, ‘We’ve always done
            it this way.’ I try to fight that. That’s why I have a clock on my
            wall that runs counterclockwise.”
          </p>
          <h3 className="text-lg font-semibold text-gray-800 mt-6">
            Grace Hopper
          </h3>
          <p className="text-gray-500 text-md">
            Computer Scientist and Military Admiral
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <div className="items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mt-8">
              <p>
                <span className="text-orange-400 font-heading">CreatioNeX</span>{' '}
                was born in 2022 from a simple idea - create a vibrant community
                where developers can learn, grow and innovate together. What
                started as informal meetups among students has evolved into one
                of University of BridgeOut's most dynamic tech communities.
              </p>
              <p>
                Based in the heart of TwentyFive.7 Township, we've grown from a
                small group of passionate student developers to a thriving
                community of over 500 members. Our journey has been marked by
                countless workshops, hackathons and networking events that have
                helped shape careers and forge lasting friendships.
              </p>
              <p>
                Today, CreatioNeX continues to be a beacon for developers
                seeking to enhance their skills, share knowledge and build
                meaningful connections in the ever-evolving world of technology.
              </p>
            </div>
          </div>
          <div className="relative mt-10">
            <div className="bg-gradient-to-br from-red-600 via-orange-500 to-orange-400 rounded-2xl p-8 text-white">
              <StaggerContainer
                staggerDelay={150}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle
                  className="w-8 h-8 text-orange-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To create an inclusive and supportive community where developers
                of all skill levels can learn, collaborate, and grow together
                while staying at the forefront of technological innovation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-red-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading developer community in Southeast Asia,
                recognized for fostering innovation, excellence, and meaningful
                connections that drive the future of technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <AnimatedSection
          animationType="fadeUp"
          delay={0}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do and shape our community
            culture.
          </p>
        </AnimatedSection>
        <StaggerContainer
          staggerDelay={150}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 via-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </StaggerContainer>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <div className="bg-gradient-to-br from-red-600 via-orange-500 to-orange-400 rounded-2xl p-12 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting your coding
            journey, there's a place for you in the CreatioNeX community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
              Join Our Events
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 transform hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* YouTube Embed Section */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Watch Our Video
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Get a glimpse of our community's passion and innovation.
          </p>
          <div className="aspect-[2.35/1] max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/NQYPQ-ZaAoQ?start=140&end=170&autoplay=1&mute=1&loop=1&playlist=NQYPQ-ZaAoQ&modestbranding=1&rel=0&controls=0"
              title="CreatioNeX Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

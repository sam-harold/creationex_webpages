import React from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Community Voices', path: '/voices' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Support', path: '/support' },
    { name: 'Feedback', path: '/feedback' },
  ];

  const programs = [
    { name: 'Workshops', path: '/events?category=workshops' },
    { name: 'Seminars', path: '/events?category=seminars' },
    { name: 'Networking Events', path: '/events?category=networking' },
    { name: 'Tech Talks', path: '/events?category=tech-talks' },
    { name: 'Career Development', path: '/events?category=career' },
    { name: 'Community Service', path: '/events?category=community' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Code of Conduct', path: '/conduct' },
    { name: 'Accessibility', path: '/accessibility' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-600',
    },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h1 className="text-2xl font-heading mb-4 text-orange-400">
                CreatioNeX
              </h1>
              <p className="text-gray-300 leading-relaxed mb-6">
                A student-led organisation at University of BridgeOut dedicated
                to uniting, developing, and transforming the next generation of
                tech leaders.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                <span className="text-sm">
                  University of BridgeOut
                  <br />
                  TwentyFive.7, Selangor
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                <a
                  href="mailto:contact@creationex.org"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  contact@creationex.org
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-orange-600 flex-shrink-0" />
                <a
                  href="tel:+603-12345678"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +603-12345678
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`p-2 rounded-lg bg-gray-800 text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-700 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs & Events */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Programs & Events
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span>{program.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center group"
                  >
                    <span>{resource.name}</span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} creationex.org. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Made by CreatioNeX Development Team |
              <span className="ml-1">
                Empowering students through technology and community
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

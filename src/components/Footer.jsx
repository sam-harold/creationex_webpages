import React from 'react';
import { Link } from 'react-router-dom';
import {Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin, ExternalLink} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
    { name: 'Join Us', path: '/join' }
  ];

  const resources = [
    { name: 'Student Voices', path: '/publications' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resources', path: '/resources' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Support', path: '/support' },
    { name: 'Feedback', path: '/feedback' }
  ];

  const programs = [
    { name: 'Workshops', path: '/events?category=workshops' },
    { name: 'Seminars', path: '/events?category=seminars' },
    { name: 'Networking Events', path: '/events?category=networking' },
    { name: 'Tech Talks', path: '/events?category=tech-talks' },
    { name: 'Career Development', path: '/events?category=career' },
    { name: 'Community Service', path: '/events?category=community' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Code of Conduct', path: '/conduct' },
    { name: 'Accessibility', path: '/accessibility' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-500' },
    { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">
                FOIT Student Society
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                A student-run organization at City University Malaysia dedicated to uniting, developing, and transforming the next generation of tech leaders.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-sm">
                  City University Malaysia<br />
                  Petaling Jaya, Selangor
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <a href="mailto:contact@foitsociety.org" className="text-sm hover:text-blue-400 transition-colors">
                  contact@foitsociety.org
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <a href="tel:+60123456789" className="text-sm hover:text-blue-400 transition-colors">
                  +60 12-345 6789
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
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
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
            <h3 className="text-lg font-semibold text-white mb-6">Programs & Events</h3>
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

            {/* Newsletter Signup */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-xs text-gray-400 mb-3">
                Get the latest news and event updates
              </p>
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © {currentYear} FOIT Student Society. All rights reserved.
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
              Made by FOIT Student Society Development Team |
              <span className="ml-1">Empowering students through technology and community</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
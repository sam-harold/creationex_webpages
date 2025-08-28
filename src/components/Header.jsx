import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isMenusDropdownOpen, setIsMenusDropdownOpen] = useState(false);
  const [isMobileMenusOpen, setIsMobileMenusOpen] = useState(false);
  const menuRef = useRef();
  const teamDropdownRef = useRef();
  const menusDropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
        setIsMobileMenusOpen(false);
      }
      if (
        isTeamDropdownOpen &&
        teamDropdownRef.current &&
        !teamDropdownRef.current.contains(e.target)
      ) {
        setIsTeamDropdownOpen(false);
      }
      if (
        isMenusDropdownOpen &&
        menusDropdownRef.current &&
        !menusDropdownRef.current.contains(e.target)
      ) {
        setIsMenusDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, isTeamDropdownOpen, isMenusDropdownOpen]);

  const menuDropdownArray = [
    { name: 'Home', path: '/home' },
    { name: 'About', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/Contact' },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileMenusOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="mx-2 lg:mx-8 px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-4xl py-1 hover:text-orange-400 transition duration-300">
            CreatioNeX
          </h1>
        </Link>

        {/* Desktop Navigation Start */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link to="/events" className="hover:text-gray-300 transition-colors">
            Events
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            ref={menusDropdownRef}
            onMouseEnter={() => setIsMenusDropdownOpen(true)}
            onMouseLeave={() => setIsMenusDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 hover:text-gray-300 transition-colors">
              About
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isMenusDropdownOpen ? 'rotate-180' : ''}`}
              />
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-black rounded-xl shadow-lg border border-black transition-all duration-300 ease-in-out ${
                isMenusDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-4'
              }`}
            >
              <div className="py-2">
                {menuDropdownArray.map((abouts, index) => (
                  <Link
                    key={index}
                    to={abouts.path}
                    className="px-4 py-2 hover:text-gray-300 transition duration-300 flex items-center group"
                  >
                    <span>{abouts.name}</span>
                    <ChevronRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/store"
            className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-white font-semibold transition duration-300"
          >
            Shop Now!
          </Link>
        </nav>

        {/* Desktop Navigation End */}

        {/* Mobile Menu Button Start */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2"
          aria-label="Open Menu"
        >
          <Menu size={36} />
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-full h-full bg-black text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 p-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Close Menu"
        >
          <X size={36} />
        </button>

        {/* Mobile Nav */}
        <nav className="flex flex-col justify-center items-center h-full gap-6 text-xl font-semibold text-center">
          <Link
            to="/events"
            onClick={closeMobileMenu}
            className="hover:text-gray-300 transition-colors"
          >
            Events
          </Link>

          {/* Mobile Abouts Section */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => {
                setIsMobileMenusOpen(!isMobileMenusOpen);
              }}
              className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
            >
              About
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${isMobileMenusOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Mobile Abouts Submenu */}
            <div
              className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
                isMobileMenusOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {menuDropdownArray.map((abouts, index) => (
                <Link
                  key={index}
                  to={abouts.path}
                  onClick={closeMobileMenu}
                  className="text-lg text-gray-300 hover:text-white transition-colors text-center"
                >
                  {abouts.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/store"
            onClick={closeMobileMenu}
            className="bg-orange-600 px-10 py-3 rounded-lg text-white font-semibold transition-colors"
          >
            Visit Store
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/creationex-logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const [isInitiativesDropdownOpen, setIsInitiativesDropdownOpen] =
    useState(false);
  const [isMobileTeamOpen, setIsMobileTeamOpen] = useState(false);
  const [isMobileInitiativesOpen, setIsMobileInitiativesOpen] = useState(false);
  const menuRef = useRef();
  const teamDropdownRef = useRef();
  const initiativesDropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
        setIsMobileTeamOpen(false);
        setIsMobileInitiativesOpen(false);
      }
      if (
        isTeamDropdownOpen &&
        teamDropdownRef.current &&
        !teamDropdownRef.current.contains(e.target)
      ) {
        setIsTeamDropdownOpen(false);
      }
      if (
        isInitiativesDropdownOpen &&
        initiativesDropdownRef.current &&
        !initiativesDropdownRef.current.contains(e.target)
      ) {
        setIsInitiativesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, isTeamDropdownOpen, isInitiativesDropdownOpen]);

  const teamMembers = [
    { name: 'Leadership', path: '/team/leadership' },
    { name: 'Developers', path: '/team/developers' },
    { name: 'Designers', path: '/team/designers' },
    { name: 'Marketing', path: '/team/marketing' },
    { name: 'All Members', path: '/team' },
  ];

  const initiatives = [
    { name: 'Community Outreach', path: '/initiatives/community' },
    { name: 'Tech Education', path: '/initiatives/education' },
    { name: 'Open Source Projects', path: '/initiatives/opensource' },
    { name: 'Sustainability', path: '/initiatives/sustainability' },
    { name: 'All Initiatives', path: '/initiatives' },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileTeamOpen(false);
    setIsMobileInitiativesOpen(false);
  };

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="mx-2 lg:mx-8 px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="CreatioNex Logo" className="h-14" />
        </Link>

        {/* Desktop Navigation Start */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>

          {/* Initiatives Dropdown */}
          <div
            className="relative"
            ref={initiativesDropdownRef}
            onMouseEnter={() => setIsInitiativesDropdownOpen(true)}
            onMouseLeave={() => setIsInitiativesDropdownOpen(false)}
          >
            <Link
              to="/initiatives"
              className="flex items-center gap-1 hover:text-gray-300 transition-colors"
            >
              Initiatives
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isInitiativesDropdownOpen ? 'rotate-180' : ''}`}
              />
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transition-all duration-200 ${
                isInitiativesDropdownOpen
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}
            >
              <div className="py-2">
                {initiatives.map((initiative, index) => (
                  <Link
                    key={index}
                    to={initiative.path}
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    {initiative.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Team Dropdown */}
          <div
            className="relative"
            ref={teamDropdownRef}
            onMouseEnter={() => setIsTeamDropdownOpen(true)}
            onMouseLeave={() => setIsTeamDropdownOpen(false)}
          >
            <Link
              to="/team"
              className="flex items-center gap-1 hover:text-gray-300 transition-colors"
            >
              Team
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${isTeamDropdownOpen ? 'rotate-180' : ''}`}
              />
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-lg shadow-lg border border-gray-700 transition-all duration-200 ${
                isTeamDropdownOpen
                  ? 'opacity-100 visible'
                  : 'opacity-0 invisible'
              }`}
            >
              <div className="py-2">
                {teamMembers.map((member, index) => (
                  <Link
                    key={index}
                    to={member.path}
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    {member.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/shop"
            className="bg-orange-600 hover:bg-orange-400 px-4 py-2 rounded-lg text-white font-semibold transition-colors"
          >
            Shop Now!
          </Link>
        </nav>

        {/* Desktop Navigation End */}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden p-2 hover:bg-gray-800 rounded transition-colors"
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
          className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Close Menu"
        >
          <X size={36} />
        </button>

        {/* Mobile Nav */}
        <nav className="flex flex-col justify-center items-center h-full gap-6 text-xl font-semibold text-center">
          <Link
            to="/about"
            onClick={closeMobileMenu}
            className="hover:text-gray-300 transition-colors"
          >
            About
          </Link>

          {/* Mobile Initiatives Section */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => {
                setIsMobileInitiativesOpen(!isMobileInitiativesOpen);
                if (!isMobileInitiativesOpen) {
                  setIsMobileTeamOpen(false); // Close team when opening initiatives
                }
              }}
              className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
            >
              Initiatives
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${isMobileInitiativesOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Mobile Initiatives Submenu */}
            <div
              className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
                isMobileInitiativesOpen
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {initiatives.map((initiative, index) => (
                <Link
                  key={index}
                  to={initiative.path}
                  onClick={closeMobileMenu}
                  className="text-lg text-gray-300 hover:text-white transition-colors text-center"
                >
                  {initiative.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Team Section */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => {
                setIsMobileTeamOpen(!isMobileTeamOpen);
                if (!isMobileTeamOpen) {
                  setIsMobileInitiativesOpen(false); // Close initiatives when opening team
                }
              }}
              className="flex items-center justify-center gap-2 hover:text-gray-300 transition-colors"
            >
              Team
              <ChevronDown
                size={20}
                className={`transition-transform duration-200 ${isMobileTeamOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Mobile Team Submenu */}
            <div
              className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-300 ${
                isMobileTeamOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {teamMembers.map((member, index) => (
                <Link
                  key={index}
                  to={member.path}
                  onClick={closeMobileMenu}
                  className="text-lg text-gray-300 hover:text-white transition-colors text-center"
                >
                  {member.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/merchandise"
            onClick={closeMobileMenu}
            className="hover:text-gray-300 transition-colors"
          >
            Merchandise
          </Link>

          <Link
            to="/shop"
            onClick={closeMobileMenu}
            className="bg-orange-600 hover:bg-orange-400 px-10 py-3 rounded-lg text-white font-semibold transition-colors"
          >
            Shop Now!
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

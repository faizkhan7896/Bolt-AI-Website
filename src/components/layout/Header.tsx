import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Menu, X } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Contact', href: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg border-b border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom px-4 py-4 mx-auto">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative bg-gray-900 p-2 rounded-lg ring-1 ring-gray-800/50 group-hover:ring-gray-700/50 transition duration-200">
                  <Code2 className="h-6 w-6 text-indigo-400 group-hover:text-indigo-300 transition duration-200" />
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Melexis
                </span>
                <div className="flex flex-col ml-1.5">
                  <span className="text-xs text-indigo-400 font-medium">
                    App
                  </span>
                  <span className="text-xs text-indigo-400 font-medium -mt-1">
                    Innovations
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-white bg-gray-800 shadow-inner shadow-gray-900'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="#"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-lg text-sm font-medium transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-gray-900/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <Link
                  to="/"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-1.5 rounded">
                      <Code2 className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">
                      Melexis
                    </span>
                  </div>
                </Link>
              </div>
              <nav className="flex flex-col p-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`p-3 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-white bg-gray-800 shadow-inner shadow-gray-900'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="#"
                  className="mt-4 p-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-lg text-base font-medium transition-all duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

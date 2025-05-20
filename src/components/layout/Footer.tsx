import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 pt-16 border-t border-gray-800">
      <div className="container-custom px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-2 rounded">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-white">Melexis</span>
                  <div className="flex flex-col ml-1">
                    <span className="text-xs text-indigo-400 font-medium">App</span>
                    <span className="text-xs text-indigo-400 font-medium -mt-1">Innovations</span>
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Crafting exceptional digital experiences through innovative web and mobile solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">
                  Custom Software
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-indigo-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  3626 North hall street,<br /> suite 610 dallas,TX 75219
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-indigo-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 6260786975</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-indigo-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@melexis.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 py-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Melexis App Innovations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
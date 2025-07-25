import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="relative overflow-hidden py-12 bg-gray-50 border-t border-gray-300 text-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap -m-6">

          {/* Logo & Copyright */}
          <div className="w-full md:w-1/2 lg:w-5/12 p-6 flex flex-col justify-between">
            <div className="mb-6">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} HackHatch. All Rights Reserved.
            </p>
          </div>

          {/* Company */}
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-2/12 p-6">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Company
            </h3>
            <ul className="space-y-4">
              {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-2/12 p-6">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Support
            </h3>
            <ul className="space-y-4">
              {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-3/12 p-6">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Legals
            </h3>
            <ul className="space-y-4">
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

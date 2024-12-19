  import React from 'react';
  import { Link } from 'react-router-dom';

  function Navbar() {
    return (
      <nav className="bg-gradient-to-r from-gray-800 to-blue-300 shadow-lg py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-shrink-0 text-white">
              <svg
                className="h-8 w-8 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 0110 10c0 4.142-3.08 7.55-7.067 9.962a1 1 0 01-1.866-.725C9.27 17.61 8.673 17.333 8 17.333c-.674 0-1.27.276-1.067.904A10 10 0 0110 0zM5.6 7.101a1 1 0 011.414-1.414L10 9.687l2.986-3.001a1 1 0 011.414 1.414L11.414 11l2.986 3.001a1 1 0 01-1.414 1.414L10 12.313l-2.986 3.001a1 1 0 01-1.414-1.414L8.586 11 5.6 7.101z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-semibold text-xl tracking-tight">
                <strong>Patient </strong>Monitoring System
              </span>
            </div>
            <div className="hidden lg:flex flex-grow justify-end">
              <Link
                to="/"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                <strong>Home</strong>
              </Link>
              <Link
                to="/dashboard"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                <strong>Dashboard</strong>
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                <strong>About Us</strong>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;

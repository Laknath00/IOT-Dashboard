import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-blue-300 py-4 text-white text-center">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-2">
          <svg
            className="h-6 w-6 mr-2 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 0a10 10 0 0110 10c0 4.142-3.08 7.55-7.067 9.962a1 1 0 01-1.866-.725C9.27 17.61 8.673 17.333 8 17.333c-.674 0-1.27.276-1.067.904A10 10 0 0110 0zM5.6 7.101a1 1 0 011.414-1.414L10 9.687l2.986-3.001a1 1 0 011.414 1.414L11.414 11l2.986 3.001a1 1 0 01-1.414 1.414L10 12.313l-2.986 3.001a1 1 0 01-1.414-1.414L8.586 11 5.6 7.101z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold text-sm tracking-tight">
          <strong>Patient </strong> Monitoring System
          </span>
        </div>
        <p className="text-xs">&copy; 2024 Patient Monitoring System. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

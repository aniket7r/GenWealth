"use client"; 
import React from 'react';

const Footer = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2024 AlchemBills. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
              &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a href="#"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 border-t border-gray-700 py-8 px-6 md:px-12 w-full mt-auto">
            {/* justify-between spreads the 3 child divs across the screen: 
              Left, Center, and Right. 
            */}
            <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                
                {/* 1. LEFT SIDE: Brand & Copyright */}
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <p className="text-gray-400 text-sm font-medium">
                        &copy; {currentYear} <NavLink to="/" className="hover:text-gray-300">
                            DevAtlas
                        </NavLink>
                        . All rights reserved.
                    </p>
                </div>

                {/* 2. CENTER: Legal Links */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <ul className="flex space-x-8 text-sm font-semibold tracking-wide">
                        <li>
                            <a 
                                href="/privacy" 
                                className="text-gray-300 hover:text-white uppercase transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a 
                                href="/terms" 
                                className="text-gray-300 hover:text-white uppercase transition-colors duration-300"
                            >
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 3. RIGHT SIDE: Social Links (LinkedIn & GitHub) */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <ul className="flex space-x-4">
                        <li>
                            <a 
                                href="https://www.linkedin.com/in/abhinandkrishna/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn"
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-all duration-300"
                            >
                                {/* You can replace this text with a real SVG icon later */}
                                <span className="text-sm font-bold">in</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="https://github.com/abhinandkrishna20/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="GitHub"
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-gray-300 hover:text-white hover:border-white transition-all duration-300"
                            >
                                {/* You can replace this text with a real SVG icon later */}
                                <span className="text-sm font-bold">gh</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
import React, { useState } from 'react';
import { Search, ArrowLeft } from 'lucide-react'; // Importing icons from lucide-react

// Main App component
export default function TopBar() {
  const [activeTab, setActiveTab] = useState('All'); // State to manage the active tab

  // Array of tab names
  const tabs = ['All', 'Users', 'Temple', 'Creator'];

  return (
    <div className=" flex items-start justify-center p-4 font-sans">
      {/* Container for the entire top bar */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 p-4 rounded-xl">
        {/* Left section: Back arrow and Search input */}
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          {/* Back arrow icon */}
          <ArrowLeft className="text-white h-6 w-6 cursor-pointer" />

          {/* Search input container */}
          <div className="relative flex items-center w-full max-w-md bg-gray-800 rounded-full shadow-lg">
            <Search className="absolute left-4 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-12 pr-4 bg-transparent text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Right section: Toggle buttons */}
        <div className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4 mt-4 sm:mt-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white shadow-md' // Active state styling
                    : 'bg-gray-900 text-gray-400 border border-gray-700 hover:bg-gray-800 hover:text-white' // Inactive state styling
                }
                mb-2 sm:mb-0 // Margin for smaller screens to prevent stacking
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

// Main App component
export default function NumberBox(){
  return (
    <div className=" bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {/* Card 1: New Clients */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          <div className="bg-blue-600 rounded-full p-3 flex items-center justify-center">
            {/* User icon (simplified SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Clients</p>
            <p className="text-2xl font-bold text-gray-800">321</p>
          </div>
        </div>

        {/* Card 2: Active Visitor */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          <div className="bg-blue-600 rounded-full p-3 flex items-center justify-center">
            {/* Bar chart icon (simplified SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 9h4v11H4zm6-5h4v16h-4zm6 8h4v8h-4z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active Visitor</p>
            <p className="text-2xl font-bold text-gray-800">35040</p>
          </div>
        </div>

        {/* Card 3: Conversion Rate */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          <div>
            <p className="text-gray-500 text-sm">Conversion Rate</p>
            <p className="text-2xl font-bold text-gray-800">9.73 %</p>
          </div>
          {/* Simple bar chart representation */}
          <div className="flex space-x-1 h-12 items-end">
            <div className="w-2 bg-blue-400 h-1/3 rounded"></div>
            <div className="w-2 bg-blue-600 h-2/3 rounded"></div>
            <div className="w-2 bg-blue-400 h-1/2 rounded"></div>
            <div className="w-2 bg-blue-600 h-full rounded"></div>
          </div>
        </div>

        {/* Card 4: Bounce Rate */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          <div>
            <p className="text-gray-500 text-sm">Bounce rate</p>
            <p className="text-2xl font-bold text-gray-800">68 %</p>
          </div>
          {/* Simple bar chart representation */}
          <div className="flex space-x-1 h-12 items-end">
            <div className="w-2 bg-blue-400 h-2/3 rounded"></div>
            <div className="w-2 bg-blue-600 h-full rounded"></div>
            <div className="w-2 bg-blue-400 h-1/2 rounded"></div>
            <div className="w-2 bg-blue-600 h-1/3 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

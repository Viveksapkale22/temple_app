import React from 'react';

export default function DonationNumberBox() {
  return (
    <div className="bg-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-7xl">
        {/* Card 1: New Donation */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          {/* Icon for New Donation */}
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            {/* User group icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm8 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4zM6 13c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"/>
            </svg>
          </div>
          <div>
            <p className="text-gray-500 text-base">New Donation</p>
            <p className="text-4xl font-bold text-gray-800">321</p>
          </div>
        </div>

        {/* Card 2: Total Amount */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4">
          {/* Icon for Total Amount (Bar Chart) */}
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9 text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 9h4v11H4zm6-5h4v16h-4zm6 8h4v8h-4z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-500 text-base">Total Amount</p>
            <p className="text-4xl font-bold text-gray-800">35040</p>
          </div>
        </div>
      </div>
    </div>
  );
}
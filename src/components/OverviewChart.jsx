import React, { useState } from 'react';

export default function OverviewChart() {
  const [selectedPeriod, setSelectedPeriod] = useState('Quarterly'); // State for dropdown

  const data = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 55 },
    { month: 'Mar', value: 80 },
    { month: 'Apr', value: 45 },
    { month: 'May', value: 30 },
    { month: 'Jun', value: 50 },
    { month: 'Jul', value: 60 },
    { month: 'Aug', value: 95, highlight: true, percentage: 35 }, // Highlighted bar
    { month: 'Sep', value: 70 },
    { month: 'Oct', value: 65 },
    { month: 'Nov', value: 55 },
    { month: 'Dec', value: 75 },
  ];

  // Calculate max value for scaling bar heights (assuming max height for 'Aug' is 95)
  const maxValue = Math.max(...data.map(item => item.value));
  const maxBarHeightPx = 100; // Define a max height in pixels for the tallest bar

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-2xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Overview</h2>
        <div className="relative">
          <select
            className="appearance-none bg-gray-100 text-gray-700 py-2 px-4 pr-8 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option>Quarterly</option>
            <option>Monthly</option>
            <option>Annually</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>

      <p className="text-gray-600 mb-8">Monthly Engagement</p>

      <div className="flex justify-around items-end h-32 gap-2">
        {data.map((item, index) => (
          <div key={item.month} className="flex flex-col items-center flex-grow">
            {item.highlight && (
              <div className="relative bottom-8 bg-black text-white text-xs font-medium py-1 px-2 rounded-md mb-2 flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l.707.707-4 4-2-2-4 4M15 11l2 2m0 0l2.5-2.5M17 13l-4 4-2-2-4 4"></path>
                </svg>
                {item.percentage}%
              </div>
            )}
            <div
              className={`w-8 rounded-md transition-all duration-300 ${
                item.highlight ? 'bg-blue-500' : 'bg-gray-200'
              }`}
              style={{ height: `${(item.value / maxValue) * maxBarHeightPx}px` }}
            ></div>
            <span
              className={`mt-2 text-xs ${
                item.highlight ? 'font-bold text-gray-800' : 'text-gray-500'
              }`}
            >
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


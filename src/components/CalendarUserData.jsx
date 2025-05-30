import React from 'react';
import { BarChart2 } from 'lucide-react'; // For the icon in the chart card header

// Component for the User Details Card (Left Side)
function UserDetailsCard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full flex flex-col justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
        {/* Email */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Email</p>
          <p className="text-gray-900 font-medium">madhuresh@gmail.com</p>
        </div>
        {/* Bank Name */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Bank Name</p>
          <p className="text-gray-900 font-medium">State Bank of India</p>
        </div>
        {/* Phone */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Phone</p>
          <p className="text-gray-900 font-medium">9256749876</p>
        </div>
        {/* Bank Account No. */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Bank Account No.</p>
          <p className="text-gray-900 font-medium">9856775487</p>
        </div>
        {/* Date of Birth */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Date of Birth</p>
          <p className="text-gray-900 font-medium">25 Nov 1995</p>
        </div>
        {/* IFSC Code */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">IFSC Code</p>
          <p className="text-gray-900 font-medium">SBIO03567899</p>
        </div>
        {/* Website */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Website</p>
          <p className="text-blue-600 font-medium cursor-pointer hover:underline">namoham.com</p>
        </div>
        {/* Account Holder Name */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Account Holder Name</p>
          <p className="text-gray-900 font-medium">Madhuresh</p>
        </div>
        {/* Joined Date */}
        <div>
          <p className="text-gray-500 uppercase text-xs font-semibold mb-1">Joined Date</p>
          <p className="text-gray-900 font-medium">21 January 2023</p>
        </div>
        {/* Empty div for alignment if needed, or remove if not necessary */}
        <div className="hidden sm:block"></div>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 self-start">
        Block Account
      </button>
    </div>
  );
}

// Component for the Total Spent Chart Card (Right Side)
function TotalSpentChartCard() {
  // Data for the chart bars. Higher values will result in taller bars.
  const chartData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 60 },
    { month: 'Mar', value: 50 },
    { month: 'Apr', value: 70 },
    { month: 'May', value: 65 },
    { month: 'Jun', value: 90 }, // Highlighted bar
    { month: 'Jul', value: 75 },
    { month: 'Aug', value: 80 },
    { month: 'Sep', value: 70 },
    { month: 'Oct', value: 60 },
    { month: 'Nov', value: 50 },
    { month: 'Dec', value: 45 },
  ];

  // Calculate max value for scaling bars. This should be the highest possible value in the data.
  const maxValue = Math.max(...chartData.map(item => item.value));
  const maxBarHeightPx = 100; // Max height for the bars within the chart area

  // Find the index of the highlighted bar (Jun)
  const highlightedIndex = chartData.findIndex(item => item.month === 'Jun');

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full flex flex-col justify-between">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500 text-lg font-medium">Total Spent Spent</p>
        <BarChart2 size={24} className="text-gray-400" /> {/* Icon in the header */}
      </div>

      {/* Value and Chart */}
      <p className="text-5xl font-bold text-gray-800 mb-6">Avg. 60 hrs</p>

      {/* Chart Area */}
      <div className="flex justify-around items-end h-40 pt-4 border-b-2 border-dashed border-gray-200 relative">
        {/* $179 label */}
        <span className="absolute right-0 -top-2 text-sm text-blue-500">$179</span>
        {chartData.map((item, index) => (
          <div key={item.month} className="flex flex-col items-center flex-grow mx-0.5">
            <div
              className={`w-5 rounded-t-sm transition-all duration-300 ease-in-out ${
                index === highlightedIndex ? 'bg-blue-500' : 'bg-gray-200 opacity-60'
              }`}
              style={{ height: `${(item.value / maxValue) * maxBarHeightPx}px` }}
            ></div>
            <span className={`mt-2 text-xs ${index === highlightedIndex ? 'font-bold text-gray-800' : 'text-gray-500'}`}>
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main component to render both cards
export default function CalendarUserData() {
  return (
    <div className="p-4 bg-gray-100 flex justify-center font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl"> {/* Changed to 2 columns on large screens */}
        <UserDetailsCard />
        <TotalSpentChartCard />
      </div>
    </div>
  );
}
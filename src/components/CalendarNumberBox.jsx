import React from 'react';
import { MapPin, TrendingUp, CheckCircle, Star } from 'lucide-react'; // Added Star for the profile card's stars

// Reusable sub-component for the individual data cards (Donation/Events)
function StatCard({ title, value, percentageChange, status, chartData }) {
  // Determine the max value in chartData for scaling bars
  const maxChartValue = chartData && chartData.length > 0
    ? Math.max(...chartData.map(d => d.value)) // Get the true max value from the data
    : 1; // Default to 1 to prevent division by zero if data is empty

  const maxBarHeightPx = 40; // Max height for the individual mini-bars (e.g., 40px within h-16 container)

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between overflow-hidden">
      {/* Top Section */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <div className="flex items-center text-green-500 text-xs font-semibold">
            <TrendingUp size={14} className="mr-0.5" />
            {percentageChange}
          </div>
        </div>
        <p className="text-4xl font-bold text-gray-800 mb-2">{value}</p>
        <div className="flex items-center text-green-600 text-sm">
          <CheckCircle size={16} className="mr-1" />
          <span>{status}</span>
        </div>
      </div>

      {/* Mini Chart Section */}
      {/* h-16 (64px) for the chart container. The bars will be scaled within this. */}
      <div className="flex justify-around items-end h-16 pt-2">
        {chartData && chartData.map((d, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-grow mx-0.5" // Reduced margin for more bars
          >
            <div
              className={`w-4 rounded-t-sm bg-blue-500 opacity-60 transition-all duration-300 ease-in-out`}
              // Calculate height based on value relative to maxChartValue
              style={{ height: `${(d.value / maxChartValue) * maxBarHeightPx}px` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main component containing all three cards
export default function CalendarNumberBox() {
  // Sample data for the mini-charts.
  // Values are relative. Higher values will result in taller bars.
  const donationChartData = [
    { value: 40 }, { value: 60 }, { value: 50 }, { value: 80 },
    { value: 70 }, { value: 90 }, { value: 85 }, { value: 95 }, // Peaks higher
  ];

  const eventsChartData = [
    { value: 30 }, { value: 50 }, { value: 40 }, { value: 70 },
    { value: 60 }, { value: 90 }, { value: 75 }, { value: 85 }, // Peaks higher
  ];

  return (
    <div className="p-4 bg-gray-100 flex justify-center font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl"> {/* Changed to 3 columns on md screens */}

        {/* Card 1: Charles Robbie Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center">
          <div className="relative mb-4">
            {/* Replace with an actual image if you have one, or keep placeholder */}
            <img
              src="https://api.dicebear.com/8.x/fun-emoji/svg?seed=CharlesRobbie&eyes=star" // Using a dicebear emoji with star eyes
              alt="Charles Robbie"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
            {/* Online indicator */}
            <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800">Charles Robbie</h3>
          <div className="flex items-center text-gray-500 text-sm mt-1 mb-6">
            <MapPin size={16} className="mr-1" />
            <span>New York, USA</span>
          </div>
          <div className="flex justify-around w-full">
            <div>
              <p className="text-xl font-bold text-gray-800">28</p>
              <p className="text-gray-500 text-sm">Post</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">643</p>
              <p className="text-gray-500 text-sm">Followers</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-800">76</p>
              <p className="text-gray-500 text-sm">Following</p>
            </div>
          </div>
        </div>

        {/* Card 2: Donation Received */}
        <StatCard
          title="Donation Received"
          value="6825"
          percentageChange="+2.45%"
          status="On track"
          chartData={donationChartData}
        />

        {/* Card 3: Events */}
        <StatCard
          title="Events"
          value="65"
          percentageChange="+2.45%"
          status="On track"
          chartData={eventsChartData}
        />
      </div>
    </div>
  );
}
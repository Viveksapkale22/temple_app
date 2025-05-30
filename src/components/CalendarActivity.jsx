import React from 'react';
import { Calendar as CalendarIcon, CheckCircle, Clock } from 'lucide-react'; // Using Calendar for meeting, CheckCircle for payment, Clock for reminder

export default function CalendarActivity() {
  // Sample activity data
  const activities = [
    {
      type: 'meeting',
      title: 'Meeting with client',
      time: '12:00 pm',
      description: 'Discuss all the requirements related with new project',
    },
    {
      type: 'payment',
      title: 'Payment',
      time: '01:00 pm',
      description: 'Payment from client for the marketing project',
    },
    {
      type: 'reminder',
      title: 'Reminder',
      time: '02:00 pm',
      description: 'It is a reminder about the meeting with the client',
    },
    {
      type: 'meeting',
      title: 'Meeting with client',
      time: '03:00 pm',
      description: 'Discuss all the requirements related with new project',
    },
    {
      type: 'payment',
      title: 'Payment',
      time: '04:00 pm',
      description: 'Payment from client for the marketing project',
    },
    {
      type: 'reminder',
      title: 'Reminder',
      time: '05:00 pm',
      description: 'It is a reminder about the meeting with the client',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Activity</h2>
        {/* You could add a dropdown or filter here if needed, similar to other components */}
      </div>

      {/* Activity List */}
      <div className="space-y-6">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start">
            {/* Time */}
            <div className="flex-shrink-0 text-gray-500 text-sm font-medium w-16">
              {activity.time}
            </div>

            {/* Vertical line and dot */}
            <div className="flex flex-col items-center mx-4">
              <div
                className={`w-4 h-4 rounded-full border-2 ${
                  activity.type === 'meeting' ? 'border-blue-500 bg-blue-100' :
                  activity.type === 'payment' ? 'border-green-500 bg-green-100' :
                  'border-orange-500 bg-orange-100' // Default for reminder
                } flex items-center justify-center`}
              >
                {activity.type === 'meeting' && <CalendarIcon size={10} className="text-blue-500" />}
                {activity.type === 'payment' && <CheckCircle size={10} className="text-green-500" />}
                {activity.type === 'reminder' && <Clock size={10} className="text-orange-500" />}
              </div>
              {/* Only show vertical line between items, not after the last one */}
              {index < activities.length - 1 && (
                <div className="w-0.5 bg-gray-200 flex-grow mt-1 -mb-1"></div>
              )}
            </div>

            {/* Activity Details */}
            <div className="flex-grow">
              <h3 className="text-base font-semibold text-gray-900">{activity.title}</h3>
              <p className="text-gray-600 text-sm">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
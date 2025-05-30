import React from 'react';

// Renamed to ReportUserList as requested
export default function ReportUserList() {
  // Sample data for the list items
  const users = [
    {
      id: 1,
      name: 'Jullu Jalal',
      tag: 'User',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      time: '8:38 AM',
    },
    {
      id: 2,
      name: 'Minerva Barnett',
      tag: 'Temple',
      description: 'Lorem ipsum dolor sit amet, consectetu',
      time: '8:13 AM',
    },
    {
      id: 3,
      name: 'Peter Lewis',
      tag: 'Creator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      time: '7:52 PM',
    },
    {
      id: 4,
      name: 'Anthony Briggs',
      tag: null, // No tag for this entry
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      time: '7:52 PM',
    },
    {
      id: 5,
      name: 'Clifford Morgan',
      tag: 'Creator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      time: '4:13 PM',
    },
    {
      id: 6,
      name: 'Cecilia Webster',
      tag: 'Temple',
      description: 'Lorem ipsum dolor sit amet, consec',
      time: '3:52 PM',
    },
    {
      id: 7,
      name: 'Harvey Manning',
      tag: null, // No tag for this entry
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      time: '2:30 PM',
    },
    {
      id: 8,
      name: 'Willie Blake',
      tag: 'User',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      time: '8:38 AM',
    },
    {
      id: 9,
      name: 'Minerva Barnett',
      tag: 'Temple',
      description: 'Lorem ipsum dolor sit amet,',
      time: '8:13 AM',
    },
    {
      id: 10,
      name: 'Fanny Weaver',
      tag: null, // No tag for this entry
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      time: '7:52 PM',
    },
    { // Added one more entry as seen in the bottom of the image
      id: 11,
      name: 'Olga Hogan',
      tag: 'Social', // Assuming 'Social' based on color in the image
      description: 'Enhance Your Brand Potential With Giant Advertising Blimps',
      time: 'Unknown Time', // Time not clearly visible, placeholder
    },
  ];

  // Helper function to get tag styles based on the tag name
  const getTagStyles = (tag) => {
    switch (tag) {
      case 'User':
        return 'bg-teal-100 text-teal-800'; // Light teal background, dark teal text
      case 'Temple':
        return 'bg-orange-100 text-orange-800'; // Light orange background, dark orange text
      case 'Creator':
        return 'bg-purple-100 text-purple-800'; // Light purple background, dark purple text
      case 'Social': // Added style for the new 'Social' tag
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800'; // Default gray for unknown tags
    }
  };

  return (
    <div className="w-full font-sans">
      <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* List Header (optional, but good for structure) */}
        {/* Adjusted grid template for better column distribution */}
        <div className="hidden md:grid grid-cols-[auto_1.5fr_0.7fr_2fr_0.5fr] items-center gap-4 p-4 border-b border-gray-200 text-gray-500 text-sm font-medium">
          <div className="w-4"></div> {/* Checkbox placeholder */}
          <div>Name</div>
          <div>Role</div>
          <div>Description</div>
          <div className="text-right">Time</div>
        </div>

        {/* List Items */}
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-4 border-b border-gray-200 last:border-b-0
                       flex-wrap md:grid md:grid-cols-[auto_1.5fr_0.7fr_2fr_0.5fr] md:gap-4"
          >
            {/* Checkbox */}
            <div className="flex-shrink-0 mr-4 md:mr-0">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
              />
            </div>

            {/* User Name */}
            <div className="font-medium text-gray-900 w-full md:w-auto mb-1 md:mb-0 order-first md:order-none">
              {user.name}
            </div>

            {/* Tag (Role) */}
            <div className="flex-shrink-0 md:flex-grow-0 md:w-auto mb-1 md:mb-0">
              {user.tag && (
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTagStyles(user.tag)}`}
                >
                  {user.tag}
                </span>
              )}
            </div>

            {/* Description */}
            <div className="text-gray-600 text-sm w-full md:w-auto mb-1 md:mb-0">
              {user.description}
            </div>

            {/* Time */}
            <div className="text-gray-500 text-sm text-right flex-shrink-0 ml-auto md:ml-0">
              {user.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
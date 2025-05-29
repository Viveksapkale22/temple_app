import React, { useState } from 'react';
import { LayoutDashboard, Heart, Calendar, ClipboardList, LogOut, ChevronRight } from 'lucide-react';

// Sidebar Component
export default function Sidebar() {
  // State to keep track of the currently active menu item
  const [activeItem, setActiveItem] = useState('Dashboard');

  // Define the menu items with their icons and names
  const menuItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Donation', icon: Heart },
    { name: 'Calendar', icon: Calendar },
    { name: 'Reports', icon: ClipboardList },
    { name: 'Logout', icon: LogOut },
  ];

  return (
    <div className="flex flex-col h-screen bg-white rounded-tr-3xl shadow-lg
                    w-64 md:w-72 lg:w-80 xl:w-96 flex-shrink-0
                    border-r border-gray-200 font-inter">
      {/* Sidebar Header/Logo Section */}
      <div className="flex items-center p-6 border-b border-gray-200">
        {/* Placeholder for a logo/icon - using a simple circle for now */}
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
          <LayoutDashboard className="text-white" size={24} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <span className="text-xs text-gray-500">v.01</span>
        </div>
      </div>

      {/* Navigation Links Section */}
      <nav className="flex-1 py-6 px-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              <div
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200
                  ${activeItem === item.name
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                onClick={() => setActiveItem(item.name)}
              >
                <div className="flex items-center space-x-3">
                  {/* Render the icon component */}
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </div>
                {/* Right arrow icon, visible for all items */}
                <ChevronRight size={18} className={`${activeItem === item.name ? 'text-white' : 'text-gray-400'}`} />
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Optional: Footer section for sidebar (e.g., copyright, version) */}
      {/* <div className="p-4 text-center text-xs text-gray-400 border-t border-gray-200">
        © 2023 Your App. All rights reserved.
      </div> */}
    </div>
  );
}

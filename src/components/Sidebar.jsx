import React from 'react'; // No need for useState here anymore
import { LayoutDashboard, Heart, Calendar, ClipboardList, LogOut, ChevronRight } from 'lucide-react';

// Sidebar Component
// Destructure activeItem and setActiveItem from props
export default function Sidebar({ activeItem, setActiveItem }) {
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
                // Call setActiveItem from props
                onClick={() => setActiveItem(item.name)}
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={20} />
                  <span className="font-medium">{item.name}</span>
                </div>
                <ChevronRight size={18} className={`${activeItem === item.name ? 'text-white' : 'text-gray-400'}`} />
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
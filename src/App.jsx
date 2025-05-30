import React, { useState } from 'react';
import './App.css'; // Make sure this is correctly linked

// Import all your components
import Sidebar from './components/Sidebar.jsx';
import TopBar from './components/TopBar.jsx';
import NumberBox from './components/NumberBox.jsx'; // Generic number box
import OverviewChart from './components/OverviewChart.jsx'; // Dashboard chart
import ClientList from './components/ClientList.jsx'; // Dashboard client list

// Donation Page Components
import DonationNumberBox from './components/DonationNumberBox.jsx';
import DonationOverviewChart from './components/DonationOverviewChart.jsx';
import DonationHistoryList from './components/DonationHistoryList.jsx';

// Calendar Page Components
import CalendarNumberBox from './components/CalendarNumberBox.jsx';
import CalendarUserData from './components/CalendarUserData.jsx';
import CalendarActivity from './components/CalendarActivity.jsx';

// Reports Page Component (assuming you named it UserReportList.jsx)
// If your file is literally named 'reportdata.jsx' and contains a default export,
// then the import should be 'import UserReportList from './components/reportdata.jsx';'
// and the component should still be used as <UserReportList />
import ReportUserList from './components/ReportUserList.jsx'; // Corrected import name


function App() {
  const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard'); // Default to 'Dashboard'

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar - fixed on the left */}
      <Sidebar activeItem={activeSidebarItem} setActiveItem={setActiveSidebarItem} />

      {/* Main content area: Flex column to stack TopBar and scrollable content below it */}
      <div className="flex flex-col flex-1">
        {/* TopBar - fixed at the top of the main content area */}
        <TopBar />

        {/* Scrollable content area - fills remaining vertical space */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">

          {/* Conditional rendering based on activeSidebarItem */}

          {activeSidebarItem === 'Dashboard' && (
            <>
              <NumberBox /> {/* Generic NumberBox for Dashboard */}
              <OverviewChart />
              <ClientList />
            </>
          )}

          {activeSidebarItem === 'Donation' && (
            <>
              <DonationNumberBox />
              <DonationOverviewChart />
              <DonationHistoryList /> {/* This was ClientList before, updated based on history */}
            </>
          )}

          {activeSidebarItem === 'Calendar' && (
          <div>
                
                <CalendarNumberBox /> {/* Profile, Donation Received, Events cards */}
                <CalendarUserData /> {/* User details and Total Spent chart */}
                <CalendarActivity />
              
            </div>
          )}

          {activeSidebarItem === 'Reports' && (
            <>
              <ReportUserList /> {/* Corrected component name */}
              <></>
            </>
          )}

          {/* Add more conditions for other sidebar items if you have them */}

        </div> {/* End of scrollable content area */}
      </div> {/* End of main content area (flex-col) */}
    </div>
  );
}

export default App;
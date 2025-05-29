import './App.css';
import { useState } from 'react'; // Import useState
import Sidebar from './components/Sidebar.jsx';
import OverviewChart from './components/OverviewChart.jsx';
import TopBar from './components/TopBar.jsx';
import NumberBox from './components/NumberBox.jsx';
import ClientList from './components/ClientList.jsx';
import DonationNumberBox from './components/DonationNumberBox.jsx';
import DonationOverviewChart from './components/DonationOverviewChart.jsx';
import DonationHistoryList from './components/DonationHistoryList.jsx';  // Assuming this is your NumberList.js
// import ClientList from './components/ClientList.jsx'; // Uncomment if needed later

function App() {
  const [activeSidebarItem, setActiveSidebarItem] = useState('Dashboard'); // Default to 'Dashboard'

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Pass activeSidebarItem and setActiveSidebarItem to Sidebar */}
      <Sidebar activeItem={activeSidebarItem} setActiveItem={setActiveSidebarItem} />
      <div className="flex flex-col flex-1 p-4 space-y-4">
        <TopBar />

        {/* Conditional rendering based on activeSidebarItem */}
        {activeSidebarItem === 'Donation' && (
          <>
            {/* <NumberBox /> */}
            <DonationNumberBox />
            <DonationOverviewChart />
            <DonationHistoryList />
            
    
          </>
        )}

        {activeSidebarItem === 'Calendar' && (
          <>
          <NumberBox />
          {/* <DonationOverviewChart /> */}
          
          </>
        )}

        {/* You can add more conditions for 'Reports' or 'Dashboard' as needed */}
        {/* For 'Dashboard', you might want to show both or a different set of components */}
        {activeSidebarItem === 'Dashboard' && (
          <>
            <NumberBox />
            <OverviewChart />
            <ClientList />
          </>
        )}

        {/* <ClientList /> */}
      </div>
    </div>
  );
}

export default App;
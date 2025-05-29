
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import OverviewChart from './components/OverviewChart.jsx'
import TopBar from './components/TopBar.jsx'
import NumberBox from './components/NumberBox.jsx'
import ClientList from './components/ClientList.jsx'
function App() {

  return (
    <div className='flex h-schreen bg-gray-100'>
      <Sidebar />
      <div className="flex flex-col flex-1 p-4 space-y-4"> 
        <TopBar />
        <NumberBox />
        <OverviewChart/>
        {/* <ClientList /> */}
      </div>
    </div>
  )
}

export default App

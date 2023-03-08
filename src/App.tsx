import React from 'react';
import './App.css';
import DeviceList from './components/DeviceList';
import DeviceDataChart from './components/DeviceDataChart';

function App() {
  return (
    <div>
      <DeviceList />
      <DeviceDataChart />
    </div>
  );
}

export default App;

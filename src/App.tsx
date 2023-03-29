import React from 'react';
import './App.css';
import DeviceList from './components/DeviceList';
import DeviceDataCharts from './components/DeviceDataCharts';

function App() {
  return (
    <div>
      <DeviceList />
      <DeviceDataCharts />
    </div>
  );
}

export default App;

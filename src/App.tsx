import Sidebar from './component/Sidebar/Sidebar';
import DemoPage from './component/DemoPage';
import React, { useState } from 'react';
import ChickenTable from './components/ChickenTable/ChickenTable';
import ProductsFilter from './components/Products/ProductsFilter';
import { ChickenData } from './types/ChickenData';
import DemoPage from './component/DemoPage'
import './App.css';

function App() {
  return (
    <div>
      <DemoPage />
      <Sidebar />
    </div>
  );
}

export default App;

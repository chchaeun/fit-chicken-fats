import Sidebar from './component/Sidebar/Sidebar';
import DemoPage from './component/DemoPage';
import React, { useState } from 'react';
import ChickenTable from './components/ChickenTable/ChickenTable';
import ProductsFilter from './components/Products/ProductsFilter';
import { ChickenData } from './types/ChickenData';
import './App.css';
import DetailSideTable from "./components/Details/DetailSideTable";

function App() {
  return (
    <div>
      <ProductsFilter onFilter={setFilteredData} />
      <ChickenTable filteredData={filteredData} />
      <DetailSideTable />
    </div>
  );
}

export default App;

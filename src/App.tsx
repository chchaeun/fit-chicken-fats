import React, { useState } from 'react';
import ChickenTable from './components/ChickenTable/ChickenTable';
import ProductsFilter from './components/Products/ProductsFilter';
import { ChickenData } from './types/ChickenData';
import DemoPage from './component/DemoPage'
import './App.css';

const App: React.FC = () => {
  const [filteredData, setFilteredData] = useState<ChickenData[]>([]);

    return (
        <div>
            <ProductsFilter onFilter={setFilteredData} />
            <ChickenTable filteredData={filteredData} />
            <SearchBox onFilter={setFilteredData} />
            <ComparisonTable />
        </div>
    );
};

export default App;
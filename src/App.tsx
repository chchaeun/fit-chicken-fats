import React, { useState } from 'react';
import ChickenTable from './components/ChickenTable/ChickenTable';
import ProductsFilter from './components/Products/ProductsFilter';
import { Product } from './types';

const App: React.FC = () => {
  const [filteredData, setFilteredData] = useState<Product[]>([]);

  return (
    <div>
      <ProductsFilter onFilter={setFilteredData} />
      <ChickenTable filteredData={filteredData} />
    </div>
  );
}
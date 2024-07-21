import React, { useState } from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import { ChickenData } from "./types/ChickenData";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";
import SearchBox from "./components/SearchBox/SearchBox"

const App: React.FC = () => {
  const [filteredData, setFilteredData] = useState<ChickenData[]>([]);

    return (
        <div className="container p-10">
            <div className="flex flex-row sm:flex-col">
                <div>
                    <ProductsFilter onFilter={setFilteredData} />
                    <SearchBox onFilter={setFilteredData} />
                    <ChickenTable filteredData={filteredData} />
                </div>
                <div className="lg:p-10 sm:w-screen sm:pr-20">
                    <ComparisonTable />
                </div>
            </div>
        </div>
    );
};
//   justify-center p-20 
export default App;
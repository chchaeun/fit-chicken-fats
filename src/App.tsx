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
        <div className="container p-4 mx-auto">
            <div className="flex flex-col items-center justify-center p-20 lg:flex-row">
                <div>
                    <ProductsFilter onFilter={setFilteredData} />
                    <SearchBox onFilter={setFilteredData} />
                    <ChickenTable filteredData={filteredData} />
                </div>
                <div className="{/* 화면이 특정픽셀 이하면 기존 크기보다 50% 작아져서 나타나야 함*/}">
                    <ComparisonTable />
                </div>
            </div>
        </div>
    );
};

export default App;
import React, { useState } from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import { ChickenData } from "./types/ChickenData";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";
import SearchBox from "./components/SearchBox/SearchBox"
import AverageTable from "./components/AverageTable/AverageTable";

const App: React.FC = () => {
    const [filteredData, setFilteredData] = useState<ChickenData[]>([]);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleMouseEnter = () => { setShowExplanation(true); };
    const handleMouseLeave = () => { setShowExplanation(false); };

    return (
        <div>
            <ProductsFilter onFilter={setFilteredData} />
            <AverageTable />
            <ChickenTable filteredData={filteredData} />
            <SearchBox onFilter={setFilteredData} />
            <ComparisonTable /> 
        </div>
    );
};

export default App;

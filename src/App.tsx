import React from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";
import SearchBox from "./components/SearchBox/SearchBox"
import AverageTable from "./components/AverageTable/AverageTable";

const App: React.FC = () => {
    return (
        <div>
            <ProductsFilter />
            <ChickenTable />
            <SearchBox />
            <ComparisonTable />
            <AverageTable />
        </div>
    );
};

export default App;

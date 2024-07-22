import React, { useState } from "react";
import ChickenTable from "./components/ChickenTable/ChickenTable";
import ProductsFilter from "./components/Products/ProductsFilter";
import { ChickenData } from "./types/ChickenData";
import "./App.css";
import ComparisonTable from "./components/Comparison/ComparisonTable";
import SearchBox from "./components/SearchBox/SearchBox"
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";

const App: React.FC = () => {
    const [filteredData, setFilteredData] = useState<ChickenData[]>([]);

    return (
        <>
            <Header />
            <div className="flex items-center justify-center p-1">
                <div className="flex flex-row w-full px-5 sm:flex-col">
                    <div>
                        <ProductsFilter onFilter={setFilteredData} />
                        <SearchBox onFilter={setFilteredData} />
                        <ChickenTable filteredData={filteredData} />
                    </div>
                    <div className="lg:p-10 sm:w-full sm:py-5">
                        <ComparisonTable />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;

import React, { useEffect, useState } from "react";
import './App.css';
import ChickenTable from './components/ChickenTable/ChickenTable';
import SearchBox from './components/SearchBox/SearchBox';
import { ChickenData } from './types/ChickenData';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<ChickenData[]>([]);
  const [filteredData, setFilteredData] = useState<ChickenData[]>([]);
  const [selected, setSelected] = useState<ChickenData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ChickenData[]>('/data.json');
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchResults = (results: ChickenData[]) => {
    setFilteredData(results);
  };

  const handleCheckboxChange = (item: ChickenData) => {
    setSelected((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        return prev.filter((i) => i.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <div>
      <SearchBox data={data} onSearchResults={handleSearchResults} />
      <ChickenTable data={filteredData} selected={selected} onCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default App;

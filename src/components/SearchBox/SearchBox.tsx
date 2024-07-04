import React, { useState } from 'react';
import { ChickenData } from '../../types/ChickenData';

interface SearchBoxProps {
  data: ChickenData[];
  onSearchResults: (results: ChickenData[]) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ data, onSearchResults }) => {
  const [query, setQuery] = useState<string>('');

  const handleSearch = () => {
    const filteredResults = data.filter(item =>
      item.product_name.toLowerCase().includes(query.toLowerCase())
    );
    onSearchResults(filteredResults);
  };

  return (
    <div className="header">
      <input
        type="text"
        className="iptSearch"
        id="keyword"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="button" className="search" onClick={handleSearch}>
        <span>검색</span>
      </button>
    </div>
  );
};

export default SearchBox;

import React, { useEffect, useState } from 'react';
import { ChickenData } from '../../types/ChickenData';
import './SearchBox.css'

interface SearchBoxProps {
  onFilter: (filteredData: ChickenData[]) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onFilter }) => {
  const [products, setProducts] = useState<ChickenData[]>([]);
  const [query, setQuery] = useState<string>('');

  // 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  // 검색어에 따라 필터링
  useEffect(() => {
    handleSearch();
  }, [products]);

  const handleSearch = () => {
    const tokens = query.toLowerCase().split(/\s+/); // 검색 쿼리 토큰화
    const filteredData = tokens.length
      ? products.filter((product) => {
          const productNameTokens = product.product_name.toLowerCase().split(/\s+/); // 제품명 토큰화
          return tokens.every(token => productNameTokens.some(productToken => productToken.includes(token)));
        })
      : products;
    onFilter(filteredData);

  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // 검색어 입력 핸들링
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="header">
      <input
        type="text"
        className="iptSearch"
        id="keyword"
        value={query}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        placeholder="제품명 검색"
      />
      <button type="button" className="search" onClick={handleSearch}>
        <span>검색</span>
      </button>
    </div>
  );
};

export default SearchBox;

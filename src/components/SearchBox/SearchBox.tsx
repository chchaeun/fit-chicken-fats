import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ChickenData } from "../../types/ChickenData";
import {
  setSearchResults,
  setFilteredResults,
} from "../../store/slices/chickenSlice";
import "./SearchBox.css";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.chicken.data);
  const [query, setQuery] = useState<string>("");

  // 검색어에 따라 필터링
  const handleSearch = () => {
    // 원본 쿼리에서 공백을 제거한 후 검색어 배열 생성
    const queryWithoutSpaces = query.replace(/\s/g, "").toLowerCase();
    const keywords = query
      .toLowerCase()
      .split(" ")
      .filter((keyword) => keyword.trim() !== "");

    // 검색어가 포함된 제품 필터링
    const searchResults =
      keywords.length > 0
        ? products.filter(
            (product: ChickenData) =>
              keywords.every((keyword) =>
                product.product_name.toLowerCase().includes(keyword)
              ) ||
              product.product_name
                .toLowerCase()
                .replace(/\s/g, "")
                .includes(queryWithoutSpaces)
          )
        : [];

    dispatch(setSearchResults(searchResults));

    // 검색 결과와 필터링 결과 교집합
    let filteredResults = products;
    if (searchResults.length > 0) {
      filteredResults = filteredResults.filter((product: ChickenData) =>
        searchResults.some(
          (searchResult: ChickenData) => searchResult.id === product.id
        )
      );
    }
    dispatch(setFilteredResults(filteredResults));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
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

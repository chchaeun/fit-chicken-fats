import React, { useEffect, useState } from 'react';
import { brandCheckbox, brandFilter, container } from './ProductsFilter.css';
import { ChickenData } from '../../types/ChickenData';

interface ProductsFilterProps {
  onFilter: (filteredData: ChickenData[]) => void;
}

const ProductsFilter: React.FC<ProductsFilterProps> = ({onFilter}) => {
  const [products, setProducts] = useState<ChickenData[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

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

  // 브랜드별 필터링
  useEffect(() => {
    let filteredData = selectedBrands.length
      ? products.filter((product: ChickenData) =>
          selectedBrands.includes(product.brand)
        )
      : products;

    // 검색 결과와 필터링 결과 교집합
    if (searchResults.length > 0) {
      filteredData = filteredData.filter((product: ChickenData) =>
        searchResults.some((searchItem) => searchItem.id === product.id)
      );
    }

    dispatch(setFilteredResults(filteredData));
  }, [selectedBrands, products, searchResults, dispatch]);

  // 브랜드 별 체크박스 변경 핸들링
  const handleCheckboxChange = (brand: string) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  // 제품 브랜드 가져오기
  const brands = Array.from(new Set(products.map((product) => product.brand)));

  return (
    <div className="products-filter-container">
      <div className="filter-header">
        <div className="filter-title">
          <div className="filter-title-text">브랜드 필터</div>
          <button
            className="toggle-button"
            onClick={() => setShowAllBrands(!showAllBrands)}
          >
            {showAllBrands ? "-" : "+"}
          </button>
        </div>
        <div
          className={`filter-content ${showAllBrands ? "expanded" : "collapsed"}`}
        >
          {brands.map((brand) => (
            <label key={brand} className="brand-checkbox">
              <input
                type="checkbox"
                value={brand}
                onChange={() => handleCheckboxChange(brand)}
                checked={selectedBrands.includes(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsFilter;

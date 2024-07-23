import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFilteredResults } from "../../store/slices/chickenSlice";
import { ChickenData } from "../../types/ChickenData";
import { FaPlus, FaMinus } from "react-icons/fa";

const ProductsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.chicken.data);
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const searchResults = useSelector(
    (state: RootState) => state.chicken.searchResults
  );

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
    <div className="p-5">
      <div className="flex items-start mb-4">
        <div
          className="flex items-center border p-2 rounded mr-2 flex-shrink-0"
          style={{ height: '3rem' }}
        >
          <h2 className="text-base mr-2 whitespace-nowrap">브랜드별 제품</h2>
          <button
            className="bg-gray-200 p-2 rounded"
            onClick={() => setShowAllBrands(!showAllBrands)}
          >
            {showAllBrands ? <FaMinus size={12}/> : <FaPlus size={12}/>}
          </button>
        </div>
        <div
          className={`flex flex-wrap items-center gap-2 flex-grow border p-2.5 rounded overflow-hidden transition-all duration-300 ${
            showAllBrands ? "h-auto" : "h-12"
          }`}
        >
          {brands.map((brand) => (
            <label key={brand} className="inline-flex items-center mr-4">
              <input
                type="checkbox"
                value={brand}
                onChange={() => handleCheckboxChange(brand)}
                checked={selectedBrands.includes(brand)}
                className="mr-1"
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
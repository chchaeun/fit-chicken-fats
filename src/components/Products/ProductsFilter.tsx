import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFilteredResults, setSelectedBrands } from "../../store/slices/chickenSlice";
import { ChickenData } from "../../types/ChickenData";

const ProductsFilter: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.chicken.data);
  const selectedBrands = useSelector((state: RootState) => state.chicken.selectedBrands);
  const searchResults = useSelector((state: RootState) => state.chicken.searchResults);

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
    const newSelectedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    
    dispatch(setSelectedBrands(newSelectedBrands));
  };

  // 제품 브랜드 가져오기
  const brands = Array.from(
    new Set(
      products
        .map((product) => product.brand)
        .filter((brand): brand is string => brand !== null) // null 제외
    )
  );

  return (
    <div className="p-4 m-4 bg-chickenBackground rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-chickenFont">브랜드별 필터</h2>
      <div className="grid grid-cols-6 sm:grid-cols-1 gap-2">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center">
            <input
              type="checkbox"
              value={brand}
              onChange={() => handleCheckboxChange(brand)}
              checked={selectedBrands.includes(brand)}
              className="mr-2"
            />
            <span className="text-chickenFont">{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductsFilter;

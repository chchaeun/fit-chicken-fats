import React, { useEffect, useState } from 'react';
import { brandCheckbox, brandFilter, container, filterSection, productContainer, productDetail } from './Manufacture.css';

interface Product {
  manufacturer: string;
  product_name: string;
  calories: string;
  protein: string;
  fat: string;
  calbohydrate: string;
  sugars: string;
  sodium: string;
  cholesterol: string;
  saturated_fat: string;
  weight: string;
  brand: string;
  id: number;
}

const Manufacture: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

  // Group products by brand
  const productsByBrand = products.reduce((acc: { [key: string]: Product[] }, product) => {
    if (!acc[product.brand]) {
      acc[product.brand] = [];
    }
    acc[product.brand].push(product);
    return acc;
  }, {});

  // Handle checkbox change
  const handleCheckboxChange = (brand: string) => {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((b) => b !== brand)
        : [...prevSelectedBrands, brand]
    );
  };

  // Filter products based on selected brands
  const filteredProducts = selectedBrands.length
    ? products.filter((product) => selectedBrands.includes(product.brand))
    : products;

  // Get unique brands
  const brands = Object.keys(productsByBrand);

  return (
    <div className={container}>
      <h1>제품 목록</h1>
      <div className={filterSection}>
        <h2>브랜드별 필터</h2>
        <div className={brandFilter}>
          {brands.map((brand) => (
            <label key={brand} className={brandCheckbox}>
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
      <div>
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <div key={product.id} className={productContainer}>
              <h3>{product.product_name}</h3>
              <div className={productContainer}>
                <p className={productDetail}><strong>제조사:</strong> {product.manufacturer}</p>
                <p className={productDetail}><strong>칼로리:</strong> {product.calories} kcal</p>
                <p className={productDetail}><strong>단백질:</strong> {product.protein} g</p>
                <p className={productDetail}><strong>지방:</strong> {product.fat} g</p>
                <p className={productDetail}><strong>탄수화물:</strong> {product.calbohydrate} g</p>
                <p className={productDetail}><strong>당류:</strong> {product.sugars} g</p>
                <p className={productDetail}><strong>나트륨:</strong> {product.sodium} mg</p>
                <p className={productDetail}><strong>콜레스테롤:</strong> {product.cholesterol} mg</p>
                <p className={productDetail}><strong>포화지방:</strong> {product.saturated_fat} g</p>
                <p className={productDetail}><strong>무게:</strong> {product.weight}</p>
              </div>
            </div>
          ))
        ) : (
          <p>선택된 브랜드의 제품이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Manufacture;

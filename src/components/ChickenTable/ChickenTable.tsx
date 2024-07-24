import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { setCurrentPage, setData } from "../../store/slices/chickenSlice";
import { ChickenData } from "../../types/ChickenData";
import { setComparisonData } from "../../store/slices/comparisonSlice";
import productsData from "../../data/products.json";

const products: ChickenData[] = productsData as ChickenData[];

const ChickenTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.chicken.data);
  const filteredResults = useSelector(
    (state: RootState) => state.chicken.filteredResults
  );
  const currentPage = useSelector(
    (state: RootState) => state.chicken.currentPage
  );
  const itemsPerPage = 15;
  const pageNumbersPerPage = 10;

  const comparisonOnSelectedItems = useSelector(
    (state: RootState) => state.comparison
  );
  const handleOnCheckboxChange = (item: ChickenData) => {
    dispatch(setComparisonData(item));
  };

  useEffect(() => {
    dispatch(setData(products));
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [filteredResults, dispatch]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResults.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const totalPageNumbers = Math.ceil(filteredResults.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const startPage =
    Math.floor((currentPage - 1) / pageNumbersPerPage) * pageNumbersPerPage + 1;
  const endPage = Math.min(startPage + pageNumbersPerPage - 1, totalPageNumbers);

  return (
    <div className="w-full p-4 bg-chickenBackground rounded-lg shadow-md">
      <table className="min-w-full bg-white rounded-lg">
        <thead className="bg-chickenMain text-chickenFont">
          <tr>
            <th className="py-2 px-4 border-b">선택</th>
            <th className="py-2 px-4 border-b">브랜드</th>
            <th className="py-2 px-4 border-b">제품명</th>
            <th className="py-2 px-4 border-b">단백질(g)</th>
            <th className="py-2 px-4 border-b">열량(kcal)</th>
          </tr>
        </thead>
        <tbody className="text-chickenFont">
          {currentItems.map((item) => (
            <tr key={item.id} className="hover:bg-chickenHover">
              <td className="py-2 px-4 border-b text-center">
                <input
                  type="checkbox"
                  checked={
                    !!comparisonOnSelectedItems.comparisonData.find(
                      (i) => i.id === item.id
                    )
                  }
                  onChange={() => handleOnCheckboxChange(item)}
                />
              </td>
              <td className="py-2 px-4 border-b">{item.brand}</td>
              <td className="py-2 px-4 border-b">{item.product_name}</td>
              <td className="py-2 px-4 border-b">{item.protein}</td>
              <td className="py-2 px-4 border-b">{item.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        {startPage > 1 && (
          <button
            onClick={() => paginate(startPage - 1)}
            className="mx-1 px-3 py-1 rounded bg-chickenMain text-white hover:bg-chickenPositive"
          >
            &laquo;
          </button>
        )}
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number
                ? "bg-chickenPoint text-white"
                : "bg-chickenMain text-white hover:bg-chickenPositive"
            }`}
          >
            {number}
          </button>
        ))}
        {endPage < totalPageNumbers && (
          <button
            onClick={() => paginate(endPage + 1)}
            className="mx-1 px-3 py-1 rounded bg-chickenMain text-white hover:bg-chickenPositive"
          >
            &raquo;
          </button>
        )}
      </div>
    </div>
  );
};

export default ChickenTable;

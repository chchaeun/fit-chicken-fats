import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import {
  setCurrentPage,
  setData,
} from "../../store/slices/chickenSlice";
import { ChickenData } from "../../types/ChickenData";
import "./ChickenTable.css";
import { setComparisonData } from "../../store/slices/comparisonSlice";

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

  // 체크박스 선택
  const comparisonOnSelectedItems = useSelector(
    (state: RootState) => state.comparison
  );
  const handleOnCheckboxChange = (item: ChickenData) => {
    dispatch(setComparisonData(item));
  };

  // 데이터 가져오기
  useEffect(() => {
    fetch("../../../public/data/products.json")
      .then((response) => response.json())
      .then((data) => dispatch(setData(data)));
  }, [dispatch]);

  // filteredData 변경시 페이지 리셋
  useEffect(() => {
    dispatch(setCurrentPage(1));
  }, [filteredResults, dispatch]);

  // 테이블 페이징
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

  // 페이지 버튼 10개씩만 나타내기
  const startPage =
    Math.floor((currentPage - 1) / pageNumbersPerPage) * pageNumbersPerPage + 1;
  const endPage = Math.min(
    startPage + pageNumbersPerPage - 1,
    totalPageNumbers
  );

  return (
    <div className="table-container">
      <table className="chicken-table">
        <thead>
          <tr>
            <th>선택</th>
            <th>브랜드</th>
            <th>제품명</th>
            <th>단백질(g)</th>
            <th>열량(kcal)</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>
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
              <td>{item.brand}</td>
              <td>{item.product_name}</td>
              <td>{item.protein}</td>
              <td>{item.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {startPage > 1 && (
          <button onClick={() => paginate(startPage - 1)}>&laquo;</button>
        )}
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : ""}
          >
            {number}
          </button>
        ))}
        {endPage < totalPageNumbers && (
          <button onClick={() => paginate(endPage + 1)}>&raquo;</button>
        )}
      </div>
    </div>
  );
};

export default ChickenTable;

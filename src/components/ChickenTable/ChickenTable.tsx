import React, { useEffect, useState } from "react";
import { ChickenData } from "../../types/ChickenData";
import "./ChickenTable.css";

interface ChickenTableProps {
    data: ChickenData[];
}

const ChickenTable: React.FC<ChickenTableProps> = ({ data }) => {
    const [selected, setSelected] = useState<ChickenData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const pageNumbersPerPage = 10;
    const [filteredData, setFilteredData] = useState<ChickenData[]>([]);

     // 초기 데이터 설정
     useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleCheckboxChange = (item: ChickenData) => {
        setSelected((prev) => {
            if (prev.find((i) => i.id === item.id)) {
                return prev.filter((i) => i.id !== item.id);
            } else {
                return [...prev, item];
            }
        });
    };

    // 테이블 페이징
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const totalPageNumbers = Math.ceil(filteredData.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    // 페이지 버튼 10개씩만 나타내기
    const startPage =
        Math.floor((currentPage - 1) / pageNumbersPerPage) *
            pageNumbersPerPage +
        1;
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
                        <th>에너지(kcal)</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={
                                        !!selected.find((i) => i.id === item.id)
                                    }
                                    onChange={() => handleCheckboxChange(item)}
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
                    <button onClick={() => paginate(startPage - 1)}>
                        &laquo;
                    </button>
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
                    <button onClick={() => paginate(endPage + 1)}>
                        &raquo;
                    </button>
                )}
            </div>
        </div>
    );
};

export default ChickenTable;

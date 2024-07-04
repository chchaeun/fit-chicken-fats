import React, { useEffect, useState } from "react";
import { ChickenData } from "../../types/ChickenData";
import "./ChickenTable.css";

const ChickenTable: React.FC = () => {
    
    const [data, setData] = React.useState<ChickenData[]>([]);
    const [selected, setSelected] = React.useState<ChickenData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const pageNumbersPerPage = 10;

    // 데이터 가져오기
    useEffect(() => {
        fetch("../../../public/data.json")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

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
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const totalPageNumbers = Math.ceil(data.length / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
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

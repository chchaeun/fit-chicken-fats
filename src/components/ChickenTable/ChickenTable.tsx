import React, { useEffect, useState } from "react";
import { ChickenData } from "../../types/ChickenData";
import "./ChickenTable.css";

const ChickenTable: React.FC = () => {
    const [data, setData] = React.useState<ChickenData[]>([]);
    const [selected, setSelected] = React.useState<ChickenData[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

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
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChickenTable;

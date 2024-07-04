import React, { useEffect } from "react";
import { ChickenData } from "../../types/ChickenData";
import "./ChickenTable.css";

const ChickenTable: React.FC = () => {
    const [data, setData] = React.useState<ChickenData[]>([]);
    const [selected, setSelected] = React.useState<ChickenData[]>([]);

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
                    {data.slice(0, 15).map((item) => (
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
        </div>
    );
};

export default ChickenTable;

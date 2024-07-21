import { FiMinusSquare, FiXSquare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setComparisonActive, clearComparisonData } from "../../store/slices/comparisonSlice";

const ComparisonTable = () => {
    const dispatch = useDispatch();
    const { comparisonData, comparisonActive, maxValues, minValues } = useSelector(
        (state: RootState) => state.comparison
    );

    // 선택 비교 창 닫음
    const handleOnCloseButton = () => {
        dispatch(setComparisonActive(false));
    };
    
    // 모든 체크박스 선택 초기화
    const handleOnClearButton = () => {
        dispatch(clearComparisonData());
    };

    // 사이드바가 비활성화 상태면 null을 반환하여 렌더링하지 않음
    if (!comparisonActive) {
        return null;
    }

    return (
        <div className="flex flex-col m-auto rounded-3xl bg-chickenMain">
            <div className="flex items-center justify-between w-full px-24 py-10 font-bold border-b-2 border-b-chickenPoint">
                <div className="text-3xl text-chickenPoint">
                    선택 상품 상세 정보 비교 창
                </div>
                <div className="flex text-xl opacity-70">
                    <div
                        className="flex items-center p-3 m-2 cursor-pointer rounded-3xl bg-chickenNeutral hover:bg-chickenPositive"
                        onClick={handleOnCloseButton}
                    >
                        <FiMinusSquare />
                        선택 창 숨기기
                    </div>
                    <div
                        className="flex items-center p-3 m-2 cursor-pointer rounded-3xl bg-chickenNeutral hover:bg-chickenNegative"
                        onClick={handleOnClearButton}
                    >
                        <FiXSquare />
                        선택 전체 해제
                    </div>
                </div>
            </div>
            <table className="m-10 text-center border-collapse bg-neutral-50 whitespace-nowrap">
                <thead className="text-lg bg-chickenPoint">
                    <tr>
                        <th className="p-4"> No. </th>
                        <th className="px-12"> 브랜드 </th>
                        <th className="px-40"> 제품명 </th>
                        <th className="px-6"> 단백질(g) </th>
                        <th className="px-4"> 에너지(kcal) </th>
                        <th className="px-4"> 지방(g) </th>
                        <th className="px-4"> 탄수화물(g) </th>
                        <th className="px-4"> 당류(g) </th>
                        <th className="px-4"> 나트륨(mg) </th>
                        <th className="px-4"> 콜레스테롤(mg) </th>
                        <th className="px-4"> 포화지방산(g) </th>
                        <th className="px-4"> 중량(g) </th>
                        <th className="px-20"> 제조사 </th>
                    </tr>
                </thead>
                <tbody className="text-sm text-slate-600">
                    {comparisonData.map((item) => (
                        <tr
                            key={item.id}
                            className="hover:bg-chickenNeutral hover:text-black "
                        >
                            <td className="p-2">{item.id}</td>
                            <td className="p-2">
                                {item.brand ? item.brand : "-"}
                            </td>
                            <td className="p-2">{item.product_name}</td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.protein === maxValues.protein
                                            ? "red"
                                            : "inherit",
                                }}
                            >
                                {item.protein}
                            </td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.calories === minValues.calories
                                            ? "blue"
                                            : "inherit",
                                }}
                            >
                                {item.calories}
                            </td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.fat === minValues.fat
                                            ? "blue"
                                            : "inherit",
                                }}
                            >
                                {" "}
                                {item.fat}
                            </td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.calbohydrate ===
                                        minValues.calbohydrate
                                            ? "blue"
                                            : "inherit",
                                }}
                            >
                                {" "}
                                {item.calbohydrate}
                            </td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.sugars === minValues.sugars
                                            ? "blue"
                                            : "inherit",
                                }}
                            >
                                {" "}
                                {item.sugars}
                            </td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.sodium === minValues.sodium
                                            ? "blue"
                                            : "inherit",
                                }}
                            >
                                {" "}
                                {item.sodium}
                            </td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.cholesterol ===
                                        minValues.cholesterol
                                            ? "blue"
                                            : "inherit",
                                }}
                            >
                                {" "}
                                {item.cholesterol}
                            </td>
                            <td
                                className="p-2"
                                style={{
                                    color:
                                        item.saturated_fat ===
                                        minValues.saturated_fat
                                            ? "blue"
                                            : "inherit",
                                }}
                            >
                                {" "}
                                {item.saturated_fat}
                            </td>
                            <td className="p-2"> {item.weight}</td>
                            <td className="p-2">
                                {item.manufacturer ? item.manufacturer : "-"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;

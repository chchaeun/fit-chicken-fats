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
        <div className="flex flex-col rounded-3xl bg-chickenMain">
            <div className="flex items-center justify-between w-full px-24 py-10 text-2xl font-bold border-b-2 border-b-chickenPoint sm:text-sm sm:py-0 sm:px-10">
                <div className="text-chickenPoint">
                    선택 상품 상세 정보 비교 창 🐔
                </div>
                <div className="flex opacity-70">
                    <div
                        className="flex items-center p-3 m-2 cursor-pointer rounded-3xl hover:bg-chickenPositive"
                        onClick={handleOnCloseButton}
                    >
                        <FiMinusSquare />
                        선택 창 숨기기
                    </div>
                    <div
                        className="flex items-center p-3 m-2 cursor-pointer rounded-3xl hover:bg-chickenNegative"
                        onClick={handleOnClearButton}
                    >
                        <FiXSquare />
                        선택 전체 해제
                    </div>
                </div>
            </div>
            <div>
                <table className="m-10 text-center bg-white border-collapse whitespace-nowrap sm:m-5">
                    <thead className="text-base bg-chickenPoint sm:hidden">
                        <tr>
                            <th className="p-2"> No. </th>
                            <th className="px-2"> 브랜드 </th>
                            <th className="px-2"> 제품명 </th>
                            <th className="px-2"> 단백질(g) </th>
                            <th className="px-2"> 에너지(kcal) </th>
                            <th className="px-2"> 지방(g) </th>
                            <th className="px-2"> 탄수화물(g) </th>
                            <th className="px-2"> 당류(g) </th>
                            <th className="px-2"> 나트륨(mg) </th>
                            <th className="px-2"> 콜레스테롤(mg) </th>
                            <th className="px-2"> 포화지방산(g) </th>
                            <th className="px-2"> 중량(g) </th>
                            <th className="px-2"> 제조사 </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-slate-600 sm:text-xs">
                        {comparisonData.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b hover:bg-chickenHover hover:text-black border-slate-200"
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
                                    {item.saturated_fat}
                                </td>
                                <td className="p-2"> {item.weight}</td>
                                <td className="p-2">
                                    {item.manufacturer
                                        ? item.manufacturer
                                        : "-"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="pb-3 mr-8 text-xs text-right text-slate-600 lg:hidden">
                (번호, 브랜드, 제품명, 단백질, 에너지, 지방, 탄수화물, 당류,
                나트륨, 콜레스테롤, 포화지방산, 중량, 제조사 순)
            </div>
            <div className="pb-3 mr-8 text-sm text-right text-slate-600 sm:hidden">
                (모든 영양성분은 100g당 기준으로 작성됨.)
            </div>
        </div>
    );
};

export default ComparisonTable;

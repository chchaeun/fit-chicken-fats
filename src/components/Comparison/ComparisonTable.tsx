import { FiMinusSquare, FiXSquare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setComparisonActive, clearComparisonData } from "../../store/slices/comparisonSlice";
import { GiChicken } from "react-icons/gi";

const ComparisonTable = () => {
    const dispatch = useDispatch();
    const { comparisonData, comparisonActive, maxValues, minValues } = useSelector(
        (state: RootState) => state.comparison
    );

    const handleOnCloseButton = () => {
        dispatch(setComparisonActive(false));
    };
    
    const handleOnClearButton = () => {
        dispatch(clearComparisonData());
    };

    if (!comparisonActive) {
        return null;
    }

    return (
        <div className="flex flex-col border-2 bg-chickenBackground lg:w-7/12 rounded-3xl border-chickenPoint whitespace-nowrap">
            <div className="flex items-center justify-between px-10 font-bold border-b-2 sm:justify-center sm:flex-col border-b-chickenPoint sm:text-sm sm:py-5 sm:px-5">
                <div className="flex items-center p-2 text-2xl text-chickenPoint">
                    <GiChicken className="text-3xl" />
                    <p className="px-1">선택 제품 비교</p>
                    <GiChicken className="text-3xl" />
                </div>
                <div className="flex opacity-70">
                    <div
                        className="flex items-center mr-5 cursor-pointer rounded-3xl hover:text-white hover:bg-chickenPositive sm:mx-5 sm:p-1.5"
                        onClick={handleOnCloseButton}
                    >
                        <FiMinusSquare />
                        선택 창 숨기기
                    </div>
                    <div
                        className="flex items-center mr-5 cursor-pointer rounded-3xl hover:text-white hover:bg-chickenNegative sm:mx-5 sm:px-1.5"
                        onClick={handleOnClearButton}
                    >
                        <FiXSquare />
                        선택 전체 해제
                    </div>
                </div>
            </div>
            <div className="pt-5 sm:overflow-x-auto">
                <div className="lg:overflow-x-auto">
                    <table className="mx-auto text-center bg-white whitespace-nowrap">
                        <thead className="text-sm bg-chickenMain sm:text-sm">
                            <tr>
                                <th className="p-2"> No. </th>
                                <th className="px-2"> 브랜드 </th>
                                <th className="px-2"> 제품명 </th>
                                <th className="px-2"> 단백질(g) </th>
                                <th className="px-2"> 열량(kcal) </th>
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
                                    className="border-b hover:bg-chickenHover hover:text-black border-chickenNeutral"
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
                                                item.protein ===
                                                maxValues.protein
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
                                                item.calories ===
                                                minValues.calories
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
                <div className="text-right">
                    <div className="py-3 mr-8 text-xs text-slate-600 ">
                        (모든 영양성분은 100g 당 함량으로 작성됨.)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;

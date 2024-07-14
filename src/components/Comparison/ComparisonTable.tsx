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
        <div className="flex flex-col w-5/6 m-auto bg-teal-700">
            <div className="flex w-full mt-14 justify-center items-center">
                <div className="font-bold text-3xl m-auto text-white">
                    🍗 내가 가장 원하는 닭가슴살 제품은 ? 🍗
                </div>
                <div className="flex font-semibold text-xl opacity-70 mr-10">
                    <div
                        className="flex cursor-pointer p-3 items-center m-2 rounded-2xl hover:bg-teal-300"
                        onClick={handleOnCloseButton}
                    >
                        <FiMinusSquare />
                        선택 창 숨기기
                    </div>
                    <div
                        className="flex cursor-pointer p-3 items-center m-2 rounded-2xl hover:bg-rose-400"
                        onClick={handleOnClearButton}
                    >
                        <FiXSquare />
                        선택 전체 해제
                    </div>
                </div>
            </div>
            <table className="bg-neutral-50 m-12 border-collapse text-center">
                <thead className="bg-teal-400 text-lg">
                    <tr>
                        <th className="p-1"> No. </th>
                        <th className="p-1"> 브랜드 </th>
                        <th className="p-1"> 제품명 </th>
                        <th className="p-1"> 단백질(g) </th>
                        <th className="p-1"> 에너지(kcal) </th>
                        <th className="p-1"> 지방(g) </th>
                        <th className="p-1"> 탄수화물(g) </th>
                        <th className="p-1"> 당류(g) </th>
                        <th className="p-1"> 나트륨(mg) </th>
                        <th className="p-1"> 콜레스테롤(mg) </th>
                        <th className="p-1"> 포화지방산(g) </th>
                        <th className="p-1"> 중량(g) </th>
                        <th className="p-1"> 제조사 </th>
                    </tr>
                </thead>
                <tbody className="text-slate-600">
                    {comparisonData.map((item) => (
                        <tr
                            key={item.id}
                            className="hover:bg-orange-200 hover:text-black "
                        >
                            <td className="p-2">{item.id}</td>
                            <td className="p-2">
                                {item.brand ? item.brand : "-"}
                            </td>
                            <td className="p-2">{item.product_name}</td>
                            <td className="p-2" style={{color: item.protein === maxValues.protein ? 'red' : 'inherit'}}>{item.protein}</td>
                            <td className="p-2" style={{color: item.calories === minValues.calories ? 'blue' : 'inherit'}}>{item.calories}</td>
                            <td className="p-2" style={{color: item.fat === minValues.fat ? 'blue' : 'inherit'}}> {item.fat}</td>
                            <td className="p-2" style={{color: item.calbohydrate === minValues.calbohydrate ? 'blue' : 'inherit'}}> {item.calbohydrate}</td>
                            <td className="p-2" style={{color: item.sugars === minValues.sugars ? 'blue' : 'inherit'}}> {item.sugars}</td>
                            <td className="p-2" style={{color: item.sodium === minValues.sodium ? 'blue' : 'inherit'}}> {item.sodium}</td>
                            <td className="p-2" style={{color: item.cholesterol === minValues.cholesterol ? 'blue' : 'inherit'}}> {item.cholesterol}</td>
                            <td className="p-2" style={{color: item.saturated_fat === minValues.saturated_fat ? 'blue' : 'inherit'}}> {item.saturated_fat}</td>
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

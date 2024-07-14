import { FiMinusSquare, FiXSquare } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setComparisonActive } from "../../store/slices/comparisonSlice";

const ComparisonTable = () => {
  const dispatch = useDispatch();
  const { comparisonData, comparisonActive } = useSelector(
    (state: RootState) => state.comparison
  );

  // 사이드바를 닫는 액션 디스패치
  const handleOnCloseButton = () => {
    dispatch(setComparisonActive(false));
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
                            <td className="p-2">{item.protein}</td>
                            <td className="p-2">{item.calories}</td>
                            <td className="p-2"> {item.fat}</td>
                            <td className="p-2"> {item.calbohydrate}</td>
                            <td className="p-2"> {item.sugars}</td>
                            <td className="p-2"> {item.sodium}</td>
                            <td className="p-2"> {item.cholesterol}</td>
                            <td className="p-2"> {item.saturated_fat}</td>
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

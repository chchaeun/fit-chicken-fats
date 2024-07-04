import { FiX } from "react-icons/fi";
import {
  closeButton,
  header,
  tableBody,
  tableHeader,
  tableRow,
  tableWrapper,
  title,
  wrapper,
} from "./Sidebar.css";

const Sidebar = ({ selectedItems }) => {

  const handleOnClose = () => {};

  return (
    <div className={wrapper}>
      <div className={header}>
        <div className={title}> 🍗 선택 비교 창 🍗 </div>
        <FiX className={closeButton} onClick={handleOnClose} />
      </div>
      <table className={tableWrapper}>
        <thead className={tableHeader}>
          <tr>
            <th> 번호 </th>
            <th> 브랜드 </th>
            <th> 제품명 </th>
            <th> 칼로리(kcal) </th>
            <th> 단백질(g) </th>
            <th> 지방(g) </th>
            <th> 탄수화물(g) </th>
            <th> 당류(g) </th>
            <th> 나트륨(mg) </th>
            <th> 콜레스테롤(mg) </th>
            <th> 포화지방산(g) </th>
            <th> 중량(g) </th>
            <th> 가격 </th>
          </tr>
        </thead>
        <tbody className={tableBody}>
          {selectedItems.map((item) => (
            <tr key={item.id} className={tableRow}>
              <td>{item.id}</td>
              <td>{item.brand}</td>
              <td>{item.name}</td>
              <td>{item.kcal}</td>
              <td>{item.protein}</td>
              <td> {item.fat}</td>
              <td> {item.calbohydrate}</td>
              <td> {item.sugars}</td>
              <td> {item.sodium}</td>
              <td> {item.cholesterol}</td>
              <td> {item.saturatedFat}</td>
              <td> {item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sidebar;

/* 
  Data, 메인페이지 적용 전 
  체크박스 선택 시 사이드 바 나타나는 기능 생성 위해 
  임시 데모 페이지 구현
*/

import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const DemoPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id, item) => {
    const foundItem = selectedItems.find((i) => i.id === id);

    if (foundItem) {
      setSelectedItems(selectedItems.filter((i) => i.id !== id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div>
      <div>
        {/* 체크박스 */}
        <label>
          <input
            type="checkbox"
            onChange={() =>
              handleCheckboxChange(1, {
                id: 1,
                brand: "하림",
                name: "닭가슴살1",
                kcal: 100,
                protein: 10,
              })
            }
          />
          1111111
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() =>
              handleCheckboxChange(2, {
                id: 2,
                brand: "허닭",
                name: "닭가슴살2",
                kcal: 200,
                protein: 20,
              })
            }
          />
          2222222
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            onChange={() =>
              handleCheckboxChange(3, {
                id: 3,
                brand: "에잇템",
                name: "닭가슴살33",
                kcal: 300,
                protein: 30,
              })
            }
          />
          333333
        </label>
      </div>
      {
        /* 선택된 아이템이 하나 이상이어야 사이드바 열림. */
        selectedItems.length > 0 ? (
          <Sidebar selectedItems={selectedItems} />
        ) : null
      }
    </div>
  );
};

export default DemoPage;

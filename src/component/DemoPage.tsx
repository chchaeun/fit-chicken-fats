/* 
  Data, 메인페이지 적용 전 
  체크박스 선택 시 사이드 바 나타나는 기능 생성 위해 
  임시 데모 페이지 구현
*/

import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const DemoPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = () => {
    /* 체크 박스 메서드 */
  };

  return (
    <div>
      <div>
          { /* 체크박스 */}
          <label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange()}
            />
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

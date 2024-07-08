/* 
  Data, 메인페이지 적용 전 기능 테스트 위해
  임시 데모 페이지 구현
*/

import { useEffect, useState } from "react";
import { ChickenData } from "../types/ChickenData";
import { setDetailData } from "../store/slices/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

const DemoPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const detailOnSelectedItems = useSelector(
    (state: RootState) => state.detail
  );

  const handleOnCheckboxChange = (item: ChickenData) => {
    dispatch(setDetailData(item));
  };

  const [data, setData] = useState<ChickenData[]>([]);
  useEffect(() => {
    fetch("../../../public/data/products.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div>
        {data.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={!!detailOnSelectedItems.selectedData.find(
                (i) => i.id === item.id
              )}
              onChange={() => handleOnCheckboxChange(item)}
            />
            {item.id}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DemoPage;
import React from "react";
import overallAveragesData from "../../data/overall_averages.json";
import brandAveragesData from "../../data/brand_averages.json";
import { NutritionData, BrandAverages } from "../../types/AverageData";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const overallAverages: NutritionData = overallAveragesData as NutritionData;
const brandAverages: BrandAverages = brandAveragesData as BrandAverages;

interface TableRowProps {
  brand: string;
  data: NutritionData;
}

const TableRow: React.FC<TableRowProps> = ({ brand, data }) => (
  <tr className={brand === "전체" ? "bg-chickenHover" : "bg-white hover:bg-chickenHover"}>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{brand}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.calories.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.protein.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.fat.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.carbohydrate.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.sugars.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.sodium.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.cholesterol.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.saturated_fat.toFixed(1)}</td>
    <td className="px-4 py-2 border-b border-chickenNeutral text-chickenFont">{data.weight.toFixed(1)}</td>
  </tr>
);

const AverageTable: React.FC = () => {
  const selectedBrands = useSelector((state: RootState) => state.chicken.selectedBrands);

  return (
    <div className="container mx-auto p-4 m-4 bg-chickenBackground rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-chickenFont">평균 영양성분</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-center">
          <thead className="bg-chickenMain text-chickenFont">
            <tr>
              <th className="px-4 py-2 border-b border-chickenNeutral">브랜드</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">에너지(kcal)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">단백질(g)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">지방(g)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">탄수화물(g)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">당류(g)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">나트륨(mg)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">콜레스테롤(mg)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">포화지방산(g)</th>
              <th className="px-4 py-2 border-b border-chickenNeutral">중량(g)</th>
            </tr>
          </thead>
          <tbody>
            <TableRow brand="전체" data={overallAverages} />
            {selectedBrands.map((brand) => (
              <TableRow key={brand} brand={brand} data={brandAverages[brand]} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AverageTable;

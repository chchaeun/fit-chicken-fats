import React from "react";
import overallAveragesData from "../../data/overall_averages.json";
import brandAveragesData from "../../data/brand_averages.json";
import { NutritionData, BrandAverages } from "../../types/AverageData";
import { useSelector } from "react-redux";
import { RootState } from "../../store";


const overallAverages: NutritionData = overallAveragesData as NutritionData;
const brandAverages: BrandAverages = brandAveragesData as BrandAverages;

const AverageTable: React.FC = () => {
    const selectedBrands = useSelector(
        (state: RootState) => state.chicken.selectedBrands
    )

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">평균 영양성분</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 border">브랜드</th>
                            <th className="px-4 py-2 border">에너지(kcal)</th>
                            <th className="px-4 py-2 border">단백질(g)</th>
                            <th className="px-4 py-2 border">지방(g)</th>
                            <th className="px-4 py-2 border">탄수화물(g)</th>
                            <th className="px-4 py-2 border">당류(g)</th>
                            <th className="px-4 py-2 border">나트륨(mg)</th>
                            <th className="px-4 py-2 border">콜레스테롤(mg)</th>
                            <th className="px-4 py-2 border">포화지방산(g)</th>
                            <th className="px-4 py-2 border">중량(g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-gray-100">
                            <td className="px-4 py-2 border">
                                전체
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.calories.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.protein.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.fat.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.carbohydrate.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.sugars.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.sodium.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.cholesterol.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.saturated_fat.toFixed(1)}
                            </td>
                            <td className="px-4 py-2 border">
                                {overallAverages.weight.toFixed(1)}
                            </td>
                        </tr>
                        {selectedBrands.map((brand) => (
                            <tr key={brand} className="bg-white">
                                <td className="px-4 py-2 border">{brand}</td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].calories.toFixed(1)}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].protein.toFixed(1)}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].fat.toFixed(1)}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].carbohydrate.toFixed(
                                        1
                                    )}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].sugars.toFixed(1)}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].sodium.toFixed(1)}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].cholesterol.toFixed(
                                        1
                                    )}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].saturated_fat.toFixed(
                                        1
                                    )}
                                </td>
                                <td className="px-4 py-2 border">
                                    {brandAverages[brand].weight.toFixed(1)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AverageTable;

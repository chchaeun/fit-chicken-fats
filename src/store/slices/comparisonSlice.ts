import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";

type ComparisonState = {
    comparisonData: ChickenData[];
    comparisonActive: boolean;
    maxValues: {
        protein: number | null;
    };
    minValues: {
        calories: number | null;
        fat: number | null;
        calbohydrate: number | null;
        sugars: number | null;
        sodium: number | null;
        cholesterol: number | null;
        saturated_fat: number | null;
    };
};

const initialState: ComparisonState = {
    comparisonData: [],
    comparisonActive: false,
    maxValues: {
        protein: null,
    },
    minValues: {
        calories: null,
        fat: null,
        calbohydrate: null,
        sugars: null,
        sodium: null,
        cholesterol: null,
        saturated_fat: null,
    },
};

const calculateMaxValues = (data: ChickenData[]) => {
    const mathMax = (data: ChickenData[], property: keyof ChickenData) => {
        return data.length > 1
            ? Math.max(...data.map((i) => i[property]))
            : null;
    };
    return {
        protein: mathMax(data, "protein"),
    };
};
const calculateMinValues = (data: ChickenData[]) => {
    const mathMin = (data: ChickenData[], property: keyof ChickenData) => {
        return data.length > 1
            ? Math.min(...data.map((i) => i[property]))
            : null;
    };

    return {
        calories: mathMin(data, "calories"),
        fat: mathMin(data, "fat"),
        calbohydrate: mathMin(data, "calbohydrate"),
        sugars: mathMin(data, "sugars"),
        sodium: mathMin(data, "sodium"),
        cholesterol: mathMin(data, "cholesterol"),
        saturated_fat: mathMin(data, "saturated_fat"),
    };
};

const comparisonSlice = createSlice({
    name: "comparison",
    initialState,
    reducers: {
        setComparisonData: (state, { payload }: PayloadAction<ChickenData>) => {
            const isComparison = state.comparisonData.find(
                (item) => item.id === payload.id
            );

            if (isComparison) {
                state.comparisonData = state.comparisonData.filter(
                    (item) => item.id !== payload.id
                );
            } else {
                if (state.comparisonData.length >= 50) {
                    alert("최대 50개까지만 선택할 수 있습니다.");
                    return;
                }
                state.comparisonData.push(payload);
            }

            state.maxValues = calculateMaxValues(state.comparisonData);
            state.minValues = calculateMinValues(state.comparisonData);

            // 사이드바 활성화 여부 업데이트
            state.comparisonActive = state.comparisonData.length > 0;
        },
        setComparisonActive: (state, action: PayloadAction<boolean>) => {
            state.comparisonActive = action.payload;
        },
        clearComparisonData: (state) => {
            state.comparisonData = [];
            state.comparisonActive = false;
            state.maxValues = initialState.maxValues;
            state.minValues = initialState.minValues;
        },
    },
});

export const { setComparisonData, setComparisonActive, clearComparisonData } =
    comparisonSlice.actions;
export const comparisonReducer = comparisonSlice.reducer;

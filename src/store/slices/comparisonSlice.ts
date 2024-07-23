import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";

type ComparisonState = {
    comparisonData: ChickenData[];
    comparisonActive: boolean;
};

const initialState: ComparisonState = {
    comparisonData: [],
    comparisonActive: false,
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
            // 사이드바 활성화 여부 업데이트
            state.comparisonActive = state.comparisonData.length > 0;
        },
        setComparisonActive: (state, action: PayloadAction<boolean>) => {
            state.comparisonActive = action.payload;
        },
        clearComparisonData: (state) => {
            state.comparisonData = [];
            state.comparisonActive = false;
        },
    },
});

export const { setComparisonData, setComparisonActive, clearComparisonData } =
    comparisonSlice.actions;
export const comparisonReducer = comparisonSlice.reducer;

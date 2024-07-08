import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChickenData } from "../../types/ChickenData";
import { ChickenState } from "../../types/ChickenState";

const initialState: ChickenState = {
    data: [],
    selected: [],
    currentPage: 1,
};

const chickenSlice = createSlice({
    name: "chicken",
    initialState,
    reducers: {
        setData(state, action: PayloadAction<ChickenData[]>) {
            state.data = action.payload;
        },
<<<<<<< HEAD
=======
        toggleSelect(state, action: PayloadAction<ChickenData>) {
            const isSelected = state.selected.find(
                (item) => item.id === action.payload.id
            );
            if (isSelected) {
                state.selected = state.selected.filter(
                    (item) => item.id !== action.payload.id
                );
            } else {
                state.selected.push(action.payload);
            }
        },
>>>>>>> 9c2f3b1 (feat: Redux를 사용한 상태 관리 통합 #15)
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
    },
});

<<<<<<< HEAD
export const { setData, setCurrentPage } = chickenSlice.actions;
export const chickenReducer = chickenSlice.reducer;
=======
export const { setData, toggleSelect, setCurrentPage } = chickenSlice.actions;
export default chickenSlice.reducer;
>>>>>>> 9c2f3b1 (feat: Redux를 사용한 상태 관리 통합 #15)

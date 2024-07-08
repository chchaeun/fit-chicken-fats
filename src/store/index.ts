import { configureStore } from "@reduxjs/toolkit";
import chickenReducer from "./slices/chickenSlice";

const store = configureStore({
<<<<<<< HEAD
    reducer,
=======
    reducer: {
        chicken: chickenReducer,
    },
>>>>>>> 9c2f3b1 (feat: Redux를 사용한 상태 관리 통합 #15)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

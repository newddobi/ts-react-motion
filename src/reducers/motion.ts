import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * 리듀서 관련 액션, 액션생성자
 */

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
interface MotionState {
    dialogFlag: boolean;
};

const initialState: MotionState = {
    dialogFlag: false,
}

const motionSlice = createSlice({
    name: "motion",
    initialState,
    reducers: {
        showDialog: (state, action: PayloadAction<boolean>) => {
            state.dialogFlag = action.payload;
        },
        closeDialog: (state, action: PayloadAction<boolean>) => {
            state.dialogFlag = action.payload;
        },
    },
});

export default motionSlice;
export const motionActions = motionSlice.actions;

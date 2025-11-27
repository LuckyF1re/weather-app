import type {DayType} from "../../pages/Home/components/Days/Days.tsx";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type PopupType = {
    isOpen: boolean;
    selectDay: DayType | null;
}

const initialState: PopupType = {
    isOpen: false,
    selectDay: null,
};

export const popupSlice = createSlice({
    name: 'popup',
    initialState: initialState,
    reducers: {
        openPopup: (state, action: PayloadAction<DayType>) => {
            state.isOpen = true;
            state.selectDay = action.payload;
        },
        closePopup: (state) => {
            state.isOpen = false;
            state.selectDay = null;
        },
    },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
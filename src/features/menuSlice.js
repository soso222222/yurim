import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false,
};

const menuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        onToggleActive: (state) => {
            state.isActive = !state.isActive;
        },
    },
});

export const {
    onToggleActive
} = menuSlice.actions;

export default menuSlice;


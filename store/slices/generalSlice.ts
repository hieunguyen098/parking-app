import { createSlice } from '@reduxjs/toolkit';

enum Type {
    success,
    error,
    fail,
}
interface GeneralState {
    notification: {
        show: boolean;
        message: string;
        type: Type;
    };
}

const initialState: GeneralState = {
    notification: {
        show: false,
        message: '',
        type: Type.success,
    },
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        onNotify: (state, action) => {
            state.notification = action.payload;
        },
    },
});

export const generalActions = generalSlice.actions;

export const generalReducer = generalSlice.reducer;

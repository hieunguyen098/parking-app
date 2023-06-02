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
    alert: {
        show: boolean;
        title: string;
        description: string;
        isSuccess: boolean;
    };
}

const initialState: GeneralState = {
    notification: {
        show: false,
        message: '',
        type: Type.success,
    },
    alert: {
        show: false,
        title: '',
        description: '',
        isSuccess: false,
    },
};

export const generalSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        onNotify: (state, action) => {
            state.notification = action.payload;
        },
        showAlert: (state, action) => {
            state.alert.show = true;
            state.alert.isSuccess = action.payload.isSuccess;
            state.alert.title = action.payload.title;
            state.alert.description = action.payload.description;
        },
        hideAlert: (state) => {
            state.alert.show = false;
        },
    },
});

export const generalActions = generalSlice.actions;

export const generalReducer = generalSlice.reducer;

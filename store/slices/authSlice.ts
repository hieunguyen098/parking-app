import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    phone: string | undefined;
}

const initialState: AuthState = {
    phone: '',
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
    },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user?: {
        phone?: string;
        fullname?: string;
    };
}

const initialState: AuthState = {
    user: {
        phone: '',
        fullname: '',
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

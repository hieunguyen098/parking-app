import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
    user?: {
        phone?: string;
        fullname?: string;
    };
    signupForm: {
        fullname: string;
        birthday: string;
        email: string;
        image_url: string;
        gender: number;
    };
}

const initialState: AuthState = {
    user: {
        phone: '',
        fullname: '',
    },
    signupForm: {
        fullname: '',
        birthday: '',
        email: '',
        image_url: '',
        gender: -1,
    },
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
        setFullname: (state, action) => {
            state.signupForm = { ...state.signupForm, fullname: action.payload };
        },
        setBirthday: (state, action) => {
            state.signupForm = { ...state.signupForm, birthday: action.payload };
        },
        setEmail: (state, action) => {
            state.signupForm = { ...state.signupForm, email: action.payload };
        },
        setImage_url: (state, action) => {
            state.signupForm = { ...state.signupForm, image_url: action.payload };
        },
        setGender: (state, action) => {
            state.signupForm = { ...state.signupForm, gender: action.payload };
        },
        updateSignupForm: (state, action) => {
            state.signupForm = { ...state.signupForm, ...action.payload };
        },
        reset: () => {
            return initialState;
        },
    },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;

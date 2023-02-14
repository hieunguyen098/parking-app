import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/authSlice';
import { generalReducer } from './slices/generalSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        general: generalReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

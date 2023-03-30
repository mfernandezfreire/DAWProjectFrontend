// import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
// import { AuthSlice, authSlice } from './slices';

// export const store = configureStore({
//   reducer: {
//     authSlice: authSlice.reducer,
//   },
//   middleware: (getDefaultSettings) => getDefaultSettings(),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
// export type AuthSliceThunkDispatch = ThunkDispatch<AuthSlice, unknown, AnyAction>;

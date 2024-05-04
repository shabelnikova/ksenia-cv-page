import {configureStore} from "@reduxjs/toolkit";
import languageSlice from "../redux/languageSlice";

export const store = configureStore({
    reducer: {
        language: languageSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
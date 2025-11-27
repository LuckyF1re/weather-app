import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice.ts";
import citySliceReducer from "./slices/citySlice.ts";
import maxDayWeatherSliceReducer from "./slices/maxDayWeatherSlice.ts";
import popupSliceReducer from "./slices/popupSlice.ts";


const rootReducer = combineReducers({
    currentWeatherSliceReducer,
    citySliceReducer,
    maxDayWeatherSliceReducer,
    popupSliceReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];


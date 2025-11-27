import type {RootState} from "./store.ts";


export const selectCurrentWeatherData = (state: RootState) =>
    state.currentWeatherSliceReducer;

export const selectMaxDayWeatherData = (state: RootState) =>
    state.maxDayWeatherSliceReducer;
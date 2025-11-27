import {createSlice} from "@reduxjs/toolkit";
import type {ListType} from "../types/types.ts";

type Response = {
    status: number;
    message: string;
}

type CurrentMaxDayWeather = {
    weatherList: ListType[]
    isLoading: boolean;
    response: Response;
}

const initialState: CurrentMaxDayWeather = {
    weatherList: [
        {
            dt: 1764082800,
            main: {
                temp_max: 0,
                temp_min: 0,
            },
            weather: [
                {
                    main: "Snow",
                    description: 'Let it snow',
                },
            ],
        },
    ],
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
}

export const maxDayWeatherSlice = createSlice({
    name: 'maxDay_weather',
    initialState: initialState,
    reducers: {
        fetchMaxDayWeather(state) {
            state.isLoading = true;
        },
        fetchMaxDayWeatherSuccess(state, action) {
            state.weatherList = action.payload.data.list;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },
        fetchMaxDayWeatherError(state, action) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText,
            }
        },
    },
})

export default maxDayWeatherSlice.reducer;
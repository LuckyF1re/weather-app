import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {WeatherType} from "../types/types.ts";
import type {AxiosResponse} from "axios";
import {storage} from "../../model/Storage.ts";

type Response = {
    status: number;
    message: string;
}

type CurrentWeather = {
    weather: WeatherType;
    isLoading: boolean;
    response: Response;
}

const initialState: CurrentWeather = {
    weather: {
        weather: [
            {
                main: "Clear"
            },
        ],
        main: {
            temp: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0,
        },
        wind: {
            speed: 0,
            deg: 0,
        },
        name: storage.getItem("city") || 'Minsk',
    },
    isLoading: false,
    response: {
        status: 0,
        message: '',
    },
};

export const currentWeatherSlice = createSlice({
    name: 'current_weather',
    initialState: initialState,
    reducers: {
        fetchCurrentWeather(state) {
            state.isLoading = true;
        },
        fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<WeatherType>>) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },

        fetchCurrentWeatherError(state, action: PayloadAction<AxiosResponse>) {
            state.isLoading = false;
            state.response = {
                status: action.payload.status,
                message: action.payload.statusText
            }
        },



    },
})

export default currentWeatherSlice.reducer;
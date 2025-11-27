import type {AppDispatch} from "../store.ts";
import {maxDayWeatherSlice} from "../slices/maxDayWeatherSlice.ts";
import {WeatherService} from "../../services/WeatherService.ts";

export const fetchMaxDayWeather = (payload: string) => async (dispatch: AppDispatch) => {

    try {
        dispatch(maxDayWeatherSlice.actions.fetchMaxDayWeather());
        const res = await WeatherService.getMaxDayWeather(payload);
        if (res.status === 200) {
            dispatch(maxDayWeatherSlice.actions.fetchMaxDayWeatherSuccess(res));
        } else {
            dispatch(maxDayWeatherSlice.actions.fetchMaxDayWeatherError(res));
        }


    } catch (error) {
        console.log(error);
    }
};
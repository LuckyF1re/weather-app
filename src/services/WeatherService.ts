import type {AxiosResponse} from 'axios';
import type {ListType, WeatherType} from "../store/types/types.ts";
import api from "../axios";

export const WeatherService = {
    getCurrentWeather(city: string): Promise<AxiosResponse<WeatherType>> {
        return api.get<WeatherType>(`/weather?q=${city}&units=metric`);
    },
    getMaxDayWeather(city: string): Promise<AxiosResponse<ListType>> {
        return api.get<ListType>(`/forecast?q=${city}&units=metric&lang=ru`)
    }
}





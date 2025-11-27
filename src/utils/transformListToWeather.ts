import type { ListType, WeatherType, WeatherMainType } from "../store/types/types.ts";

export const transformListToWeather = (
    listData: ListType[],
    filterKey: number,
    cityName: string = ''
): WeatherType | null => {

    const filteredData = listData.find((list) => list.dt === filterKey);


    if (!filteredData) {
        console.log("Элемент с dt", filterKey, "не найден");
        return null;
    }

    const weatherMain = (filteredData.weather[0]?.main as WeatherMainType) || 'Clear';

    return {
        weather: [
            {
                main: weatherMain,
            }
        ],
        main: {
            temp: Math.floor(filteredData.main.temp_max),
            feels_like: filteredData.main.feels_like ?? filteredData.main.temp_min,
            pressure: filteredData.main.pressure ?? 1013,
            humidity: filteredData.main.humidity ?? 50,
        },
        wind: {
            speed: filteredData.wind?.speed ?? 0,
            deg: filteredData.wind?.deg ?? 0,
        },
        name: cityName,
    };
};
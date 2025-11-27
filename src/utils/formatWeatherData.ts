
import type {WeatherType} from "../store/types/types.ts";

const getPressureStatus = (pressure: number): string => {
    const convertationPressure = Math.round(pressure * 0.75);
    if (convertationPressure <  740) return 'низкое';
    if (convertationPressure > 780) return 'высокое';
    return 'нормальное';
}

const getHumidityStatus = (humidity: number): string => {
    if (humidity < 30) return 'сухо';
    if (humidity < 60) return 'комфортно';
    if (humidity < 80) return 'влажно';
    return 'очень влажно';
};

const getWindDirection = (deg: number): string => {
    const directions = ['северный', 'северо-восточный', 'восточный', 'юго-восточный', 'южный', 'юго-западный', 'западный', 'северо-западный'];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
};

const getWindStrength = (speed: number): string => {
    if (speed < 1) return 'нет ветра';
    if (speed < 3) return 'легкий ветер';
    if (speed < 6) return 'слабый ветер';
    if (speed < 10) return 'умеренный ветер';
    if (speed < 15) return 'сильный ветер';
    return 'очень сильный ветер';
};



export const formatWeatherData = (weather: WeatherType) => {
    const {main, wind} = weather;

    return[
        {
            iconId: "temp",
            name: "Температура",
            value: `${Math.floor(main.temp) > 0 ? `+${Math.floor(main.temp)}` : Math.floor(main.temp)}° - ощущается как ${Math.round(main.feels_like) > 0 ? `+${Math.round(main.feels_like)}` : Math.round(main.feels_like)}°`,
        },

        {
            iconId: "pressure",
            name: 'Давление',
            value: `${Math.floor(main.pressure * 0.75)} мм - ртутного столба - ${getPressureStatus(main.pressure)}`,
        },
        {
            iconId: "precipitation",
            name: 'Влажность',
            value: `${main.humidity}% - ${getHumidityStatus(main.humidity)}`,
        },
        {
            iconId: "wind",
            name: 'Ветер',
            value: `${Math.floor(wind.speed)} м/с - ${getWindDirection(wind.speed)} - ${getWindStrength(wind.speed)}`,
        },
    ];
};

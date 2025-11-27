
import type {DayType} from "../pages/Home/components/Days/Days.tsx";
import type {ListType} from "../store/types/types.ts";

    const filterByHour = (forecast: ListType[], targetHour: number) => {

        const seenDays = new Set();

        return forecast.filter((item) => {
            const date = new Date(item.dt * 1000);
            const dayKey = date.toLocaleDateString();
            const hour = date.getHours();

            if (hour === targetHour && !seenDays.has(dayKey)) {
                seenDays.add(dayKey);
                return true;
            }
            return false;
        });
    };



    const dayInfoFormatRu = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('ru-Ru', {
            day: 'numeric',
            month: 'short',
        })
    }

    const dayOfWeekFormat = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const isToday = date.toDateString() === today.toDateString();
        const isTomorrow = date.toDateString() === tomorrow.toDateString();

        if (isToday) return 'Сегодня';
        if (isTomorrow) return 'Завтра';

        return date.toLocaleDateString('ru-Ru', { weekday: 'short' });
    }



export const daysArrayConvertation = (weatherList: ListType[] ): DayType[] => {
    const filteredData = filterByHour(weatherList, 12)

    const filteredNightsTemp = filterByHour(weatherList, 0).map((item)=>{
        return item.main.temp_min
    })

        return filteredData.map((day, index)=> {
            return {
                day: dayOfWeekFormat(day.dt) ,
                dayInfo: dayInfoFormatRu(day.dt),
                iconId: day.weather[0].main,
                tempDay:
                    Math.ceil(day.main.temp_max) === 0
                        ?
                        `${Math.ceil(day.main.temp_max)}`
                        :
                        Math.ceil(day.main.temp_max) > 0 ? `+${Math.ceil(day.main.temp_max)}` : `${Math.ceil(day.main.temp_max)}`,
                tempNight:
                    Math.floor(filteredNightsTemp[index]) === 0
                        ?
                        `${Math.floor(filteredNightsTemp[index])}`
                        :
                        Math.floor(filteredNightsTemp[index]) > 0 ? `+${Math.floor(filteredNightsTemp[index])}` : `${Math.floor(filteredNightsTemp[index])}`,
                info: day.weather[0].description,
                dt: day.dt
            }
        })

}
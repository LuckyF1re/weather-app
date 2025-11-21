import styles from './Days.module.scss'
import {Card} from "./Card.tsx";
import {Tabs} from "./Tabs.tsx";

type DaysType = {

}

export type DayType = {
    day: string,
    dayInfo: string,
    iconId: string,
    tempDay: string,
    tempNight: string,
    info: string,
}

export const Days = (props: DaysType) => {

    const days: DayType[] = [
        {
            day: "Сегодня",
            dayInfo: "20 ноя",
            iconId: "sun",
            tempDay: "+18",
            tempNight: "+15",
            info: "Облачно"
        },
        {
            day: "Завтра",
            dayInfo: "21 ноя",
            iconId: "smallRain",
            tempDay: "+18",
            tempNight: "+15",
            info: "Небольшой дождь и солнце"
        },
        {
            day: "Сб",
            dayInfo: "22 ноя",
            iconId: "smallRainSun",
            tempDay: "+18",
            tempNight: "+15",
            info: "Небольшой дождь"
        },
        {
            day: "Вс",
            dayInfo: "23 ноя",
            iconId: "mainlyCloudy",
            tempDay: "+18",
            tempNight: "+15",
            info: "Облачно"
        },
        {
            day: "Пн",
            dayInfo: "24 ноя",
            iconId: "sun",
            tempDay: "+18",
            tempNight: "+15",
            info: "Облачно"
        },
        {
            day: "Вт",
            dayInfo: "25 ноя",
            iconId: "sun",
            tempDay: "+18",
            tempNight: "+15",
            info: "Облачно"
        },
        {
            day: "Ср",
            dayInfo: "26 ноя",
            iconId: "sun",
            tempDay: "+18",
            tempNight: "+15",
            info: "Облачно"
        },
    ]

    return (
        <>
            <Tabs/>
            <div className={styles.days}>
                {days.map((day: DayType, index: number) => (
                    <Card key={index}  day={day}/>
                ))}
            </div>


        </>

    );
};
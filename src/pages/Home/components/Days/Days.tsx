import styles from './Days.module.scss'
import {Card} from "./Card.tsx";
import {Tabs} from "./Tabs.tsx";
import {useCustomSelector} from "../../../../hooks/hooksForStore.ts";
import {selectMaxDayWeatherData} from "../../../../store/selectors.ts";
import {daysArrayConvertation} from "../../../../utils/formatMaxDayWeatherData.ts";
import {useState} from "react";
import {storage} from "../../../../model/Storage.ts";
import {Spinner} from "../Loader/Spinner.tsx";

export type DayType = {
    day: string,
    dayInfo: string,
    iconId: string,
    tempDay: string,
    tempNight: string,
    info: string,
    dt: number,
}

export const Days = () => {

    const [viewDays, setViewDays] = useState<number>(storage.getItem("daysCount") || 3)
    const {weatherList} = useCustomSelector(selectMaxDayWeatherData)
    const daysWeatherData = daysArrayConvertation(weatherList)
    const trimDaysWeatherData = daysWeatherData.slice(0, viewDays)
    const onClickChangeFilterHandler = (daysCount: number) => {
        setViewDays(daysCount)
        storage.setItem("daysCount", daysCount)
    }

    const { isLoading } = useCustomSelector(selectMaxDayWeatherData);

    if (isLoading) {
        return (
            <div className={styles.days} >
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <Tabs onClickChangeFilterHandler={onClickChangeFilterHandler} vievDays={viewDays}/>
            <div className={styles.days}>
                {trimDaysWeatherData.map((day: DayType, index: number) => (
                    <Card
                        key={index}
                        day={day}
                    />
                ))}
            </div>
        </>
    );
};

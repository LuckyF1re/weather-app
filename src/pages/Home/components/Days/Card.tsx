import styles from './Days.module.scss'
import type {DayType} from "./Days.tsx";
import {GlobalSvgSelector} from "../../../../assets/icons/shared/GlobalSvgSelector.tsx";

type CardType = {
    day: DayType
}

export const Card = (props: CardType) => {

    const {day} = props

    return (
        <div className={styles.card}>
            <div className={styles.day}>{day.day}</div>
            <div className={styles.dayInfo}>{day.dayInfo}</div>
            <div className={styles.img}>
                <GlobalSvgSelector id={day.iconId}/>
            </div>
            <div className={styles.dayTemp}>{day.tempDay}</div>
            <div className={styles.tempNight}>{day.tempNight}</div>
            <div className={styles.info}>{day.info}</div>
        </div>
    );
};

import styles from './Days.module.scss'
import type {DayType} from "./Days.tsx";
import {GlobalSvgSelector} from "../../../../assets/icons/shared/GlobalSvgSelector.tsx";
import {useCustomDispatch} from "../../../../hooks/hooksForStore.ts";
import {openPopup} from "../../../../store/slices/popupSlice.ts";

type CardType = {
    day: DayType
}

export const Card = (props: CardType) => {

    const {day} = props

    const dispatch = useCustomDispatch();

    const handleOpenClick = () => {
        dispatch(openPopup(day));
    }

    return (
        <div className={styles.card} onClick={handleOpenClick}>
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

import type {ItemType} from "./ThisDayInfo.tsx";
import styles from "./ThisDayInfo.module.scss";
import {IndicatorSvgSelector} from "../../../../assets/icons/indicators/IndicatorSvgSelector.tsx";

type ThisDayItemType = {
    item: ItemType
}

export const ThisDayItem = ({item}: ThisDayItemType) => {

    const {iconId, name, value} = item;

    return (
        <div className={styles.item}>
            <div className={styles.indicator}>
                <IndicatorSvgSelector id={iconId}/>
            </div>
            <div className={styles.indicatorName}>{name}</div>
            <div className={styles.indicatorValue}>{value}</div>
        </div>
    );
};

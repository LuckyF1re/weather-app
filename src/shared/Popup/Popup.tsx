import styles from './Popup.module.scss'
import {ThisDayItem} from "../../pages/Home/components/ThisDayInfo/ThisDayItem.tsx";
import type {ItemType} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo.tsx";
import {GlobalSvgSelector} from "../../assets/icons/shared/GlobalSvgSelector.tsx";

export const Popup = () => {

    const items = [
        {
            iconId: "temp",
            name: 'Температура',
            value: '20° - ощущается как 17°'
        },
        {
            iconId: "pressure",
            name: 'Давление',
            value: '765 мм ртутного столба - нормальное'
        },
        {
            iconId: "precipitation",
            name: 'Осадки',
            value: 'Без осадков'
        },
        {
            iconId: "wind",
            name: 'Ветер',
            value: '3 м/с юго-запад - легкий ветер'
        },
    ];

    return (
        <>
            <div className={styles.blur}></div>
            <div className={styles.popup}>
                <div className={styles.day}>
                    <div className={styles.dayTemp}>12°</div>
                    <div className={styles.dayName}>Среда</div>
                    <div className={styles.dayImg}><GlobalSvgSelector id="sun"/></div>
                    <div className={styles.dayTime}>
                        Время: <span>01:08</span>
                    </div>
                    <div className={styles.dayCity}>
                        Город: <span>Минск</span>
                    </div>


                </div>
                <div className={styles.thisDayInfoItems}>
                    {items.map((item: ItemType) =>
                        <ThisDayItem key={item.iconId} item={item} />
                    )}
                </div>
                <div className={styles.close}>
                    <GlobalSvgSelector id={"close"}/>
                </div>
            </div>
        </>
    );
};


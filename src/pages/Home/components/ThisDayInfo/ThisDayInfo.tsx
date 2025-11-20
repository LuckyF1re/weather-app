import styles from './ThisDayInfo.module.scss';
import country from '../../../../assets/images/RBwithoutBG.png'
import {ThisDayItem} from "./ThisDayItem.tsx";

type ThisDayInfoType = {

}

export type ItemType = {
    iconId: string
    name: string
    value: string
}

export const ThisDayInfo = (props: ThisDayInfoType) => {

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
        <div className={styles.thisDayInfo}>
            <div className={styles.thisDayInfoItems}>
                {items.map((item: ItemType) =>
                     <ThisDayItem key={item.iconId} item={item} />
                    )}
            </div>
            <img src={country} alt="" className={styles.imageBlock} />
        </div>
    );
};
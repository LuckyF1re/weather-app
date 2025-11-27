import styles from './ThisDayInfo.module.scss';
import country from '../../../../assets/images/RBwithoutBG.png'
import {ThisDayItem} from "./ThisDayItem.tsx";
import {useCustomSelector} from "../../../../hooks/hooksForStore.ts";
import {selectCurrentWeatherData, selectMaxDayWeatherData} from "../../../../store/selectors.ts";
import {formatWeatherData} from "../../../../utils/formatWeatherData.ts";
import {Spinner} from "../Loader/Spinner.tsx";


export type ItemType = {
    iconId: string
    name: string
    value: string
}

export const ThisDayInfo = () => {
    const {weather} = useCustomSelector(
        selectCurrentWeatherData);
    const { isLoading } = useCustomSelector(selectMaxDayWeatherData);
    if (isLoading) {
        return (
            <div className={styles.thisDayInfo} >
                <Spinner />
            </div>
        );
    }
    
const items  = formatWeatherData(weather);

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
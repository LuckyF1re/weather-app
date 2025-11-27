import styles from './Popup.module.scss'
import {ThisDayItem} from "../../pages/Home/components/ThisDayInfo/ThisDayItem.tsx";
import type {ItemType} from "../../pages/Home/components/ThisDayInfo/ThisDayInfo.tsx";
import {GlobalSvgSelector} from "../../assets/icons/shared/GlobalSvgSelector.tsx";
import type {DayType} from "../../pages/Home/components/Days/Days.tsx";
import {useCustomSelector} from "../../hooks/hooksForStore.ts";
import {selectMaxDayWeatherData} from "../../store/selectors.ts";
import {transformListToWeather} from "../../utils/transformListToWeather.ts";
import {formatWeatherData} from "../../utils/formatWeatherData.ts";

type PopupType = {
    isOpen: boolean;
    day: DayType | null;
    onClose: () => void;
}

export const Popup = (props: PopupType) => {
    const {isOpen, day, onClose} = props;

    const {weatherList} = useCustomSelector(selectMaxDayWeatherData)
    const city = useCustomSelector(state => state.citySliceReducer.label);

    // Если попап закрыт - не рендерим ничего
    if (!isOpen) return null;



    // 👇 Защита от undefined и проверка что данные загружены
    if (!day || !weatherList?.length) {
        return (
            <>
                <div className={styles.blur} onClick={onClose}></div>
                <div className={styles.popup}>
                    <div className={styles.loading}>Загрузка данных...</div>
                    <div className={styles.close} onClick={onClose}>
                        <GlobalSvgSelector id={"close"}/>
                    </div>
                </div>
            </>
        );
    }

    // 👇 Преобразуем данные с проверкой
    const transformedData = transformListToWeather(weatherList, day.dt, city);

    if (!transformedData) {
        return (
            <>
                <div className={styles.blur} onClick={onClose}></div>
                <div className={styles.popup}>
                    <div className={styles.error}>Данные не найдены</div>
                    <div className={styles.close} onClick={onClose}>
                        <GlobalSvgSelector id={"close"}/>
                    </div>
                </div>
            </>
        );
    }

    // 👇 Форматируем данные
    const formattedItems = formatWeatherData(transformedData);

    return (
        <>
            <div className={styles.blur} onClick={onClose}></div>
            <div className={styles.popup}>
                <div className={styles.day}>
                    <div className={styles.dayTemp}>{Math.round(transformedData.main.temp)}°</div>
                    <div className={styles.dayName}>{day.day}</div>
                    <div className={styles.dayImg}>
                        <GlobalSvgSelector id={day.iconId}/>
                    </div>
                    <div className={styles.dayTime}>
                        Дата: {day.dayInfo}
                    </div>
                    <div className={styles.dayCity}>
                        Город: <span>{city}</span>
                    </div>
                </div>

                <div className={styles.thisDayInfoItems}>
                    {formattedItems.map((item: ItemType) =>
                        <ThisDayItem key={item.iconId} item={item} />
                    )}
                </div>

                <div className={styles.close} onClick={onClose}>
                    <GlobalSvgSelector id={"close"}/>
                </div>
            </div>
        </>
    );
};
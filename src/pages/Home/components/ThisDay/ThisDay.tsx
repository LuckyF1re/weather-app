import styles from './ThisDay.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/shared/GlobalSvgSelector.tsx";
import type {WeatherType} from "../../../../store/types/types.ts";
import {TimeDisplay} from "./TimeDisplay.tsx";
import {useCustomSelector} from "../../../../hooks/hooksForStore.ts";
import {selectMaxDayWeatherData} from "../../../../store/selectors.ts";
import {Spinner} from "../Loader/Spinner.tsx";


type ThisDayType = {
    weather: WeatherType
}

export const ThisDay = ({weather}: ThisDayType) => {

    const city = useCustomSelector(state => state.citySliceReducer.label);

    const { isLoading } = useCustomSelector(selectMaxDayWeatherData);

    if (isLoading) {
        return (
            <div className={styles.thisDay}>
                <Spinner />
            </div>
        );
    }


    return (
        <div className={styles.thisDay}>

            <div className={styles.topBlock}>

                <div className={styles.topBlockWrapper}>
                    <div className={styles.thisTemp}>
                        {
                            Math.floor(weather.main.temp) > 0
                            ?
                                `+${Math.floor(weather.main.temp)}`
                                :
                                Math.floor(weather.main.temp)
                        }°
                    </div>
                    <div className={styles.thisDayName}>Сегодня</div>
                </div>

                <GlobalSvgSelector id={weather.weather[0].main} />

            </div>

            <div className={styles.bottomBlock}>
                <div className={styles.thisTime}>
                    Время: <TimeDisplay/>
                </div>

                <div className={styles.thisCity}>
                    Город: <span>{city}</span>
                </div>
            </div>
        </div>
    );
};


import styles from "./Home.module.scss";
import {ThisDay} from "./components/ThisDay/ThisDay.tsx";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo.tsx";
import {Days} from "./components/Days/Days.tsx";
import {useCustomDispatch, useCustomSelector} from "../../hooks/hooksForStore.ts";
import {useEffect} from "react";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather.ts";
import {selectCurrentWeatherData} from "../../store/selectors.ts";
import {fetchMaxDayWeather} from "../../store/thunks/fetchMaxDayWeather.ts";
import {storage} from "../../model/Storage.ts";

const Home = () => {

    const dispatch = useCustomDispatch();
    const {weather} = useCustomSelector(
        selectCurrentWeatherData);

    useEffect(() => {
        const defaultCity =  storage.getItem("city") || 'Minsk';
        dispatch(fetchCurrentWeather(defaultCity))
        dispatch(fetchMaxDayWeather(defaultCity))
    }, [])

    return (
        <div className={styles.home}>

            <div className={styles.wrapper}>
                <ThisDay weather={weather}/>
                <ThisDayInfo/>
            </div>

            <Days/>
        </div>
    );
};

export default Home;

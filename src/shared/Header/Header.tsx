import styles from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/shared/GlobalSvgSelector.tsx";
import Select from "react-select";
import {useTheme} from "../../hooks/useTheme.tsx";
import {Theme} from "../../context/ThemeContext.ts";
import {useCustomDispatch} from "../../hooks/hooksForStore.ts";
import {fetchCurrentWeather} from "../../store/thunks/fetchCurrentWeather.ts";
import {setCity} from "../../store/slices/citySlice.ts";
import {CITIES} from "../../constants/cities.ts";
import {fetchMaxDayWeather} from "../../store/thunks/fetchMaxDayWeather.ts";
import {storage} from "../../model/Storage.ts";

export const Header = () => {

   const defaultCity =  storage.getItem("city");
   const strokeOfCITIES = CITIES.find((city) => city.value === defaultCity) || CITIES[0];
    const theme = useTheme();

    const colorStyles = {
        control: (styles: any): any => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,

        }),
        singleValue: (styles: any): any => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#FFFFFF' :  '#000000',
        }),
        menuList: (styles: any): any => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : '',
        })
    }

    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }

    const dispatch = useCustomDispatch();

    const onChangeSelectCityHandler = (selectedOption: any) => {
        dispatch(setCity({
            value: selectedOption.value,
            label: selectedOption.label,
        }));
        storage.setItem("city", selectedOption.value);
        dispatch(fetchCurrentWeather(selectedOption.value));
        dispatch(fetchMaxDayWeather(selectedOption.value));
    }

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}><GlobalSvgSelector id="header-logo"/></div>
                <div className={styles.title}>React weather</div>
            </div>

            <div className={styles.wrapper}>
                <div className={styles.changeTheme} onClick={changeTheme}>
                    <GlobalSvgSelector id="change-theme"/>
                </div>
                <Select defaultValue={strokeOfCITIES}  styles={colorStyles} options={CITIES}  onChange={onChangeSelectCityHandler}  />
            </div>
        </header>
    );
};


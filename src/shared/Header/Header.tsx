import styles from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/shared/GlobalSvgSelector.tsx";
import Select from "react-select";
import {useTheme} from "../../hooks/useTheme.tsx";
import {Theme} from "../../context/ThemeContext.ts";


export const Header = () => {

    const theme = useTheme();

    const options = [
        {value: 'minsk', label: 'Минск'},
        {value: 'grdn', label: 'Гродно'},
        {value: 'mog', label: 'Могилев'},
    ]

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
        })
    }



    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
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
                <Select defaultValue={options[0]}  styles={colorStyles} options={options} />
            </div>
        </header>
    );
};


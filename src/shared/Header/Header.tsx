import styles from './Header.module.scss'
import {GlobalSvgSelector} from "../../assets/icons/shared/GlobalSvgSelector.tsx";
import Select from "react-select";


export const Header = () => {

    const options = [
        {value: 'minsk', label: 'Минск'},
        {value: 'grdn', label: 'Гродно'},
        {value: 'mog', label: 'Могилев'},
    ]

    const colorStyles = {
        control: (styles: any): any => ({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}><GlobalSvgSelector id="header-logo"/></div>
                <div className={styles.title}>React weather</div>
            </div>


            <div className={styles.wrapper}>
                <div className={styles.changeTheme}>
                    <GlobalSvgSelector id="change-theme"/>
                </div>
                <Select defaultValue={options[0]}  styles={colorStyles} options={options} />
            </div>
        </header>
    );
};


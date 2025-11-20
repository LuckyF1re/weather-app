import styles from './ThisDay.module.scss';
import {GlobalSvgSelector} from "../../../../assets/icons/shared/GlobalSvgSelector.tsx";


export const ThisDay = () => {
    return (
        <div className={styles.thisDay}>

            <div className={styles.topBlock}>

                <div className={styles.topBlockWrapper}>
                    <div className={styles.thisTemp}>20°</div>
                    <div className={styles.thisDayName}>Сегодня</div>
                </div>

                <GlobalSvgSelector id={'sun'}/>

            </div>


            <div className={styles.bottomBlock}>
                <div className={styles.thisTime}>
                    Время: <span>17:21</span>
                </div>

                <div className={styles.thisCity}>
                    Город: <span>Минск</span>
                </div>
            </div>

        </div>
    );
};

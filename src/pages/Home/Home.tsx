import styles from "./Home.module.scss";
import {ThisDay} from "./components/ThisDay/ThisDay.tsx";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo.tsx";
import {Days} from "./components/Days/Days.tsx";

const Home = () => {
    return (
        <div className={styles.home}>

            <div className={styles.wrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>

            <Days/>
        </div>
    );
};

export default Home;
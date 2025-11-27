// components/Loaders/Spinner.tsx
import styles from './Spinner.module.scss';

export const Spinner = () => (
    <div className={styles.spinner}>
        <div className={styles.loader}></div>
        <p className={styles.text}>Загружаем данные...</p>
    </div>
);
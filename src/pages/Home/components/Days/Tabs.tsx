import styles from './Days.module.scss'

type TabsType = {

}

export type TabsFilterType = {
    value: string
}

export const Tabs = (props: TabsType) => {

    const tabs: TabsFilterType[]  = [
        {value: "На неделю"},
        {value: "На 10 дней"},
        {value: "На месяц"}
    ]

    return (
        <div className={styles.tabs}>
            <div className={styles.tabsWrapper}>
                {
                    tabs.map((tab) => (
                            <div className={styles.tab + ' ' + styles.active} key={tab.value}>{tab.value}</div>
                        )
                     )
                }
            </div>
            <div className={styles.cancel}>Отменить</div>
        </div>
    );
};
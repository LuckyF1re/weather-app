import styles from './Days.module.scss'

type TabsType = {
    onClickChangeFilterHandler: (daysCount: number)=>void,
    vievDays: number
}

export type TabsFilterType = {
    value: string
    daysCount: number
}

export const Tabs = (props: TabsType) => {

    const tabs: TabsFilterType[]  = [
        {value: "На три дня", daysCount: 3},
        {value: "На четыре дня", daysCount: 4},
        {value: "На пять дней", daysCount: 5},
    ]

    const cancelTabHandler = () => {
        props.onClickChangeFilterHandler(3)
    }


    return (
        <div className={styles.tabs}>
            <div className={styles.tabsWrapper}>
                {
                    tabs.map((tab) => (
                            <div
                                className={`${styles.tab} ${props.vievDays === tab.daysCount ? styles.active : ''}`}
                                key={tab.value}
                                onClick={()=>props.onClickChangeFilterHandler(tab.daysCount)}
                            >
                                {tab.value}
                            </div>
                        )
                     )
                }
            </div>
            <div
                className={styles.cancel}
                onClick={cancelTabHandler}
            >
                Отменить
            </div>
        </div>
    );
};



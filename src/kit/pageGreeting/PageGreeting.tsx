import React, {ReactNode} from 'react';
import styles from "@/kit/pageGreeting/PageGreeting.module.css";

const PageGreeting = ({children , title , actions} : {children: ReactNode , title: string , actions?: ReactNode}) => {
    return (
        <div className={styles.listLayout}>
            <div className={styles.listHeaderWrapper}>
                <h2 className={styles.listHeader}>{title}</h2>
                {actions}
            </div>
            {children}
        </div>
    );
};

export default PageGreeting;
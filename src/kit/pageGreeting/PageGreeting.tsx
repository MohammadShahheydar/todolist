import React, {ReactNode} from 'react';
import styles from "@/kit/pageGreeting/PageGreeting.module.css";

const PageGreeting = ({children , title} : {children: ReactNode , title: string}) => {
    return (
        <div className={styles.listLayout}>
            <h2 className={styles.listHeader}>{title}</h2>
            {children}
        </div>
    );
};

export default PageGreeting;
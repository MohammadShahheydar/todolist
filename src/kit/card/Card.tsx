import React, {ReactNode} from 'react';
import styles from "@/kit/card/Card.module.css";

const Card = ({children , bg = "white"}: {children: ReactNode , bg?: "white" | "gradient"}) => {
    return (
        <div className={`${styles.TodoCard} ${bg == 'white' ? styles.bgWhite : styles.bgGradient}`}>
            {children}
        </div>
    );
};

export default Card;
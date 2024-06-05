"use client"
import React, {ReactNode} from 'react';
import styles from "@/kit/button/Button.module.css"


const Button = ({variant, children, onClick}: {
    variant: "success" | "danger" | "info",
    children: ReactNode,
    onClick?: (e: Event) => void
}) => {
    return (
        <button className={`${styles.btn} ${styles["btn-"+variant]}`}>
            {children}
        </button>
    );
};

export default Button;
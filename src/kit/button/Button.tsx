"use client"
import React, {ReactNode} from 'react';
import styles from "@/kit/button/Button.module.css"
import {on} from "next/dist/client/components/react-dev-overlay/pages/bus";


const Button = ({variant, children, onClick}: {
    variant: "success" | "danger" | "info",
    children: ReactNode,
    onClick?: () => void
}) => {
    return (
        <button onClick={() => onClick?.()} className={`${styles.btn} ${styles["btn-"+variant]}`}>
            {children}
        </button>
    );
};

export default Button;
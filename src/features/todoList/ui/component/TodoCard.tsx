import React from 'react';
import styles from "@/features/todoList/ui/cssModule/TodoCard.module.css"
import Button from "@/kit/button/Button";
import {ListTodo, Pencil, Trash2} from "lucide-react";

const TodoCard = () => {
    return (
        <div className={`${styles.TodoCard} ${styles.bgGradient}`}>
            <div className={styles.title}>
                <h4>عنوان</h4>
                <p>توضیحات</p>
            </div>
            <div className={styles.actions}>
                <Button variant={'success'}>
                    <ListTodo size={20} strokeWidth={1} />
                </Button>
                <Button variant={'info'}>
                    <Pencil size={20} strokeWidth={1} />
                </Button>
                <Button variant={'danger'}>
                    <Trash2 size={20} strokeWidth={1} />
                </Button>
            </div>
        </div>
    );
};

export default TodoCard;
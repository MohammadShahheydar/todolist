import React from 'react';
import styles from "@/features/todoList/ui/cssModule/ListLayout.module.css"
import TodoList from "@/features/todoList/ui/component/TodoList";

/**
 * @description render the content of / route
 * @return {JSX.Element}
 */
const ListLayout = () => {
    return (
        <div className={styles.listLayout}>
            <h2 className={styles.listHeader}>لیست تسک ها</h2>
            <TodoList/>
        </div>
    );
};

export default ListLayout;
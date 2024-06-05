import React from 'react';
import styles from "@/features/todoList/ui/cssModule/TodoList.module.css"
import TodoCard from "@/features/todoList/ui/component/TodoCard";

const TodoList = () => {
    return (
        <div className={styles.todoList}>
            <TodoCard/>
        </div>
    );
};

export default TodoList;
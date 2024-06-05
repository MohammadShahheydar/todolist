"use client"
import React from 'react';
import styles from "@/features/todoList/ui/cssModule/TodoList.module.css"
import TodoCard from "@/features/todoList/ui/component/TodoCard";
import {useTodoList} from "@/store/StoreProvider";

const TodoList = () => {

    let {todos} = useTodoList();

    return (
        <div className={styles.todoList}>
            {todos?.map((todo) => (
                <TodoCard {...todo} key={todo.id}/>
            ))}
        </div>
    );
};

export default TodoList;
"use client"
import React from 'react';
import Card from "@/kit/card/Card";
import TodoForm from "@/features/addTodo/ui/component/TodoForm";
import {useTodoList} from "@/store/StoreProvider";
import {useRouter} from "next/navigation";

const EditTodoLayout = ({id}: {id: string}) => {

    let {getTodoById , editTodo} = useTodoList();
    let router = useRouter();
    
    return (
        <Card>
            <TodoForm initialVal={getTodoById(id)} onSubmit={todo => {
                editTodo({id , title: todo.title! , description: todo.description!})
                router.push('/')
            }}/>
        </Card>
    );
};

export default EditTodoLayout;
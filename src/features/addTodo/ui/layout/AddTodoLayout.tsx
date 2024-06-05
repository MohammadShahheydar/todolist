"use client"
import React from 'react';
import Card from "@/kit/card/Card";
import TodoForm from "@/features/addTodo/ui/component/TodoForm";
import {useTodoList} from "@/store/StoreProvider";
import {useRouter} from "next/navigation";

const AddTodoLayout = () => {

    let {addTodo} = useTodoList();
    let router = useRouter();

    return (
        <Card>
            <TodoForm onSubmit={data => {
                addTodo({description: data.description!, title: data.title!});
                router.push('/')
            }}/>
        </Card>
    );
};

export default AddTodoLayout;
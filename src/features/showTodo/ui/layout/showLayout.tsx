"use client"
import React, {useEffect, useState} from 'react';
import {useTodoList} from "@/store/StoreProvider";
import {TodoModel, TodoStatus} from "@/store/data/TodoListModels";
import PageGreeting from "@/kit/pageGreeting/PageGreeting";
import Card from "@/kit/card/Card";
import Link from "next/link";
import Button from "@/kit/button/Button";
import {Home} from "lucide-react";

const ShowLayout = ({id}: {id: string}) => {
    let {getTodoById} = useTodoList();
    const [todo, setTodo] = useState<TodoModel>()

    useEffect(() => {
        setTodo(getTodoById(id))
    }, []);

    return (
        <PageGreeting
            title={'تسک'}
            actions={
                <Link href={'/'}>
                    <Button variant={'success'}>
                        <Home size={20} strokeWidth={1}/>
                    </Button>
                </Link>
            }
        >
            <Card>
                <p>عنوان: {todo?.title}</p>
                <p>توضیحات: {todo?.description}</p>
                <p>وضعیت: {todo?.status == TodoStatus.IDL ? "انجام نشده" : (todo?.status == TodoStatus.PENDING) ? "در حال انجام" : "انجام شده"}</p>
            </Card>
        </PageGreeting>
    )
};

export default ShowLayout;
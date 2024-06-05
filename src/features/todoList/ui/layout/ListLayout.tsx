import React from 'react';
import TodoList from "@/features/todoList/ui/component/TodoList";
import PageGreeting from "@/kit/pageGreeting/PageGreeting";
import Button from "@/kit/button/Button";
import {Plus} from "lucide-react";
import Link from "next/link";

/**
 * @description render the content of / route
 * @return {JSX.Element}
 */
const ListLayout = () => {
    return (
        <PageGreeting title={'لیست تسک ها'} actions={
            <Link href={'/create'}>
                <Button variant={'success'}>
                    <Plus size={20} strokeWidth={1} />
                </Button>
            </Link>
        }>
            <TodoList/>
        </PageGreeting>
    );
};

export default ListLayout;
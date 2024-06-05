import React from 'react';
import PageGreeting from "@/kit/pageGreeting/PageGreeting";
import AddTodoLayout from "@/features/addTodo/ui/layout/AddTodoLayout";
import Link from "next/link";
import Button from "@/kit/button/Button";
import {Home} from "lucide-react";

const Page = () => {
    return (
        <PageGreeting
            title={'تسک جدید'}
            actions={
                <Link href={'/'}>
                    <Button variant={'success'}>
                        <Home size={20} strokeWidth={1}/>
                    </Button>
                </Link>
            }
        >
            <AddTodoLayout/>
        </PageGreeting>
    );
};

export default Page;
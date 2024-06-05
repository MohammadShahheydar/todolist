import React from 'react';
import PageGreeting from "@/kit/pageGreeting/PageGreeting";
import AddTodoLayout from "@/features/addTodo/ui/layout/AddTodoLayout";

const Page = () => {
    return (
        <PageGreeting title={'تسک جدید'}>
            <AddTodoLayout/>
        </PageGreeting>
    );
};

export default Page;
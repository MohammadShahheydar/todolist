import React from 'react';
import TodoList from "@/features/todoList/ui/component/TodoList";
import PageGreeting from "@/kit/pageGreeting/PageGreeting";

/**
 * @description render the content of / route
 * @return {JSX.Element}
 */
const ListLayout = () => {
    return (
        <PageGreeting title={'لیست تسک ها'}>
            <TodoList/>
        </PageGreeting>
    );
};

export default ListLayout;
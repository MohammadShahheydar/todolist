import React, {Suspense} from 'react';
import PageGreeting from "@/kit/pageGreeting/PageGreeting";
import EditTodoLayout from "@/features/editTodo/ui/layout/EditTodoLayout";
import Button from "@/kit/button/Button";
import {Home} from "lucide-react";
import Link from "next/link";


/**
 * @description route "/edit/[id]" edit todos item
 * @return {JSX.Element}
 */
const Page = (
    {
        params,
        searchParams,
    }: {
        params: { id: string };
        searchParams?: { [key: string]: string | string[] | undefined };
    }
) => {


    return (
        <PageGreeting
            title={'ویرایش تسک'}
            actions={
                <Link href={'/'}>
                    <Button variant={'info'}><Home size={20} strokeWidth={1}/></Button>
                </Link>
            }
        >
            <Suspense fallback={<h1>در حال بارگذاری</h1>}>
                <EditTodoLayout id={params.id}/>
            </Suspense>
        </PageGreeting>
    );
};

export default Page;
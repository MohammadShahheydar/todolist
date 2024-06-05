import ShowLayout from "@/features/showTodo/ui/layout/showLayout";
import {Suspense} from "react";

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
        <Suspense fallback={<h1>در حال بارگذاری</h1>}>
            <ShowLayout id={params.id}/>
        </Suspense>
    );
};

export default Page;
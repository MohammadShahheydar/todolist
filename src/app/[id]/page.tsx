import ShowLayout from "@/features/showTodo/ui/layout/showLayout";
import {Suspense} from "react";


/**
 * @description route "/[id]" show page for todos item
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
        <Suspense fallback={<h1>در حال بارگذاری</h1>}>
            <ShowLayout id={params.id}/>
        </Suspense>
    );
};

export default Page;
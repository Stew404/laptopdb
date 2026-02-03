'use client'

import useMessage from "@/app/hooks/useMessage";
import { useRouter } from "next/navigation";

export default function Element({
    name,
    id,
    dateEdited,
    removeAction,
}: {
    name: string;
    id: number;
    dateEdited: string;
    removeAction: () => Promise<{ message: string }>;
}) {
    const router = useRouter();
    const setMessage = useMessage((state) => state.setMessage);
    const deleteHandler = async () => {
        if (window.confirm("Вы уверены что хотите удалить " + name)) {
            const { message } = await removeAction();

            setMessage(message);
            router.refresh();
        };
    };
    return (
        <div className="flex justify-between items-center w-full h-[70px] px-[1rem] bg-[#ffffff1f] main-border  hover:bg-[#ffffff30]">
            <a
                className="flex items-center w-full h-full"
                href={`?id=${id}&action=edit`}
            >
                <p>{name}</p>
            </a>
            <div>
                <h3 className="text-[1.2rem]">Дата изменения</h3>
                <p className="text-[1.4rem] w-fit">{dateEdited}</p>
            </div>
            <button
                onClick={deleteHandler}
                className="button text-red-700 p-[.5rem]"
            >
                Удалить
            </button>
        </div>
    );
}
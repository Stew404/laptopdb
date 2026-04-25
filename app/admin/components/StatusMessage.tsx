'use client'

import {useMessage} from "@/app/hooks/useMessage";


export default function StatusMessage(){
    const message = useMessage((state)=> state.message)
    const clearMessage = useMessage((state)=> state.clearMessage)
    return (
        message &&
        <p onClick={(e) => {
            e.currentTarget.style.display = "none";
            clearMessage()
        }} className="p-[1rem] bg-[#deb887]">
            {message}
        </p>
    );
}
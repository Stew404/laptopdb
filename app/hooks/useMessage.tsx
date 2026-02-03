import {create} from "zustand"

interface MessageState {
    message: string
    setMessage: (newMessage: string) => void,
    clearMessage: () => void
}

const useMessage = create<MessageState>((set)=>({
    message: "",
    setMessage: (newMessage)=>{set(() => ({message: newMessage}))},
    clearMessage: ()=>{set(() => ({message: ""}))}
}))

export default useMessage
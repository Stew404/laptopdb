import {create} from "zustand"
import { Laptop } from "../types"

interface MessageState {
    message: string
    setMessage: (newMessage: string) => void,
    clearMessage: () => void
}

export const useMessage = create<MessageState>((set)=>({
    message: "",
    setMessage: (newMessage)=>{set(() => ({message: newMessage}))},
    clearMessage: ()=>{set(() => ({message: ""}))}
}))

interface LaptopState {
    laptop: Laptop | null
    setLaptop: (newLaptop: Laptop) => void,
    clearLaptop: ()=> void
}

export const useLaptop = create<LaptopState>((set)=>({
    laptop: null,
    setLaptop: (newLaptop)=>{set(()=>({laptop: newLaptop}))},
    clearLaptop: ()=>{set(()=>({laptop: null}))}
}))
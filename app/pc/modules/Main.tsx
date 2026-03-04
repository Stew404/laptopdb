'use client'
import { Laptop } from "../../types";
import ComponentForm from "../components/ComponentForm/ComponentForm";
import { useLaptop } from "../../hooks/useMessage";
import LaptopInfo from "../components/LaptopInfo";
import BlockStyle from "@/app/ui/BlockStyle";

export default function Main({ laptops } : { laptops: Laptop[]}) {

    //TODO: form is not clearing when changing options from sidebar
    const {laptop} = useLaptop()
    console.log(laptops)
    return (
        <BlockStyle style="blue">
            <main className="w-full h-full ml-[1rem] p-[1rem] flex flex-col items-center rounded-[50px] rounded-br-[10px]">
                <ComponentForm laptops={laptops} />
                {laptop && <LaptopInfo laptop={laptop} />}
            </main>
        </BlockStyle>
    );
}
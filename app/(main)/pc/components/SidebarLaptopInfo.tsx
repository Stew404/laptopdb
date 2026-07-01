'use client'

import Image from "next/image";
import BlockStyle from "../../ui/BlockStyle";
import { useLaptop } from "@/app/hooks/useLaptop";
import Field from "../ui/Field";
import { useBaseLaptop } from "@/app/hooks/useBaseLaptop";
import { useSidebarTab } from "@/app/hooks/useSidebarTab";


const SidebarLaptopInfo = ()=>{
    const {laptop} = useLaptop()
    const {baseLaptop} = useBaseLaptop()
    const {sidebarTab} = useSidebarTab()
    return (
        <div
            className={`${
                sidebarTab !== "laptop-info" ? "opacity-0 hidden" : ""
            }
            mt-[1rem]
            h-full
            flex
            flex-col`}
        >
            <div className="flex h-2/5 gap-[1rem]">
                <BlockStyle style="blue" additionalClasses="rounded-[50px]">
                    <div className="w-7/10 aspect-square relative overflow-hidden">
                        {laptop && (
                            <Image
                                className=""
                                src={laptop.laptopImage}
                                fill={true}
                                alt="laptop image"
                            />
                        )}
                        {!laptop && (
                            <p className="w-full h-full flex justify-center items-center text-center opacity-[.7]">
                                Выберите поколение и компоненты ноутбука
                            </p>
                        )}
                    </div>
                </BlockStyle>
                <BlockStyle style="blue" additionalClasses="rounded-[35px]">
                    <div className="w-3/10 aspect-square relative"></div>
                </BlockStyle>
            </div>
            {baseLaptop && (
                <BlockStyle
                    style="blue"
                    additionalClasses="flex flex-col justify-center p-[1rem] h-3/5 rounded-[50px] rounded-bl-[10px] mt-[1rem]"
                >
                    <div>
                        <h3 className="leading-[0.7] mb-[1rem]">
                            {baseLaptop.brand} {baseLaptop.line}{" "}
                            {baseLaptop.generation ?? ""}{" "}
                            {laptop && (
                                <span className="text-[1.2rem] opacity-[.5] no-wrap">
                                    {laptop.model}
                                </span>
                            )}
                        </h3>
                        <h3 className="text-[2rem]">Корпус и габариты</h3>
                        <Field
                            label="Размеры"
                            value={baseLaptop.size}
                            className="text-[1.8rem]"
                        />
                        <Field
                            label="Вес"
                            value={baseLaptop.weight}
                            className="text-[1.8rem]"
                        />
                        <Field
                            label="Материал корпуса"
                            value={baseLaptop.material}
                            className="text-[1.8rem]"
                        />
                    </div>
                </BlockStyle>
            )}
        </div>
    );
}

export default SidebarLaptopInfo
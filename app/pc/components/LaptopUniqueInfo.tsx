
import Image from "next/image";
import { FC } from "react";
import { Laptop } from "../../types";
import { useLaptop } from "@/app/hooks/useLaptop";
import Field from "../ui/Field";

const LaptopUniqueInfo: FC = () => {

    const {laptop} = useLaptop()

    return (
        <div className="w-1/3 text-[24px]">
            {laptop && (
                <>
                    

                    <div>
                        <Field label="Год выхода" value={laptop.releaseYear} />
                        <Field label="Процессор" value={laptop.cpu} />
                        <Field label="Встроенное GPU" value={laptop.igpu} />
                        <Field label="GPU" value={laptop.gpu} />
                        <Field label="Объем ОЗУ" value={`${laptop.ram} ГБ`} />
                    </div>
                </>
            )}
        </div>
    );
};

export default LaptopUniqueInfo;

import LaptopUniqueInfo from "./LaptopUniqueInfo";
import LaptopStaticInfo from "./LaptopStaticInfo";

export default function LaptopInfo(){

    return (
        <div className="flex gap-[3rem] w-full h-full py-[2rem] px-[1rem] text-[24px]">
            <LaptopUniqueInfo/>
            <LaptopStaticInfo />
        </div>
    );
}
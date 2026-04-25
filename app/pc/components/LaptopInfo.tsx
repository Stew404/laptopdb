import LaptopUniqueInfo from "./LaptopUniqueInfo";
import LaptopStaticInfo from "./LaptopStaticInfo";

export default function LaptopInfo() {
    return (
        <div className="w-full h-full flex flex-col xl:flex-row gap-[1.4rem] animate-device-content">


            <div className="w-full xl:w-[28rem] shrink-0">
                <div className="h-full block-bg main-border soft-shadow rounded-[3.2rem] p-[1.4rem] flex flex-col gap-[1.2rem]">
                    <LaptopUniqueInfo />
                </div>
            </div>


            <div className="flex-1 min-w-0">
                <div className="h-full block-bg main-border soft-shadow rounded-[3.2rem] p-[1.6rem] overflow-hidden">
                    <LaptopStaticInfo />
                </div>
            </div>
        </div>
    );
}
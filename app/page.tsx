import {getVendorsWithModels} from "@/app/db/vendors"
import {getModelsWithLaptops} from "@/app/db/models"
import { getLaptopByID } from "@/app/db/laptops";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import NavMenu from "./components/Nav";
import News from "./components/News";
import Header from "./components/Header";

export default async function Home({}) {
    // const vendorsWithModels = await getVendorsWithModels()
    // const modelsWithLaptops = await getModelsWithLaptops();
    // const query = await searchParams;
    // const laptop = await getLaptopByID(query.laptop);
    return (
        <>
            {/* <NavMenu /> */}
            <News />
            {/* TODO: Put that somewhere on another page */}
            {/* <Sidebar
                vendorsWithModels={vendorsWithModels}
                modelsWithLaptops={modelsWithLaptops}
            />
            {!!laptop && <Main laptopData={laptop} />} */}
        </>
    );

}

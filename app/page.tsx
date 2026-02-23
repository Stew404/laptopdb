import News from "./modules/News";
import Header from "./modules/Header";

export default async function Home({}) {
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

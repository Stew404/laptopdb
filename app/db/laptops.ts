import sql from "./db"
import { GenericSingleRow, Laptop } from "@/app/types"

const ELEMS_PER_PAGE = 10

export async function getLaptops(searchQuery = "%", page = 1){

    const laptops = await sql<Laptop[]>`
        select * from laptops
        where lower(concat(brand, line, generation, model)) like lower(${`%${searchQuery}%`})
        order by date_edited desc
        limit ${ELEMS_PER_PAGE} offset ${ELEMS_PER_PAGE * (page - 1)}
    `
    return laptops
}

export async function getLaptopByID(id: number){
    if(!id){
        return null
    }

    const laptop = await sql<Laptop[]>`
    select * from laptops where id = ${id}
    `

    return laptop[0]
}

export async function getLaptopsByFullName(vendor:string, line:string, generation:string = "") {
    const generationOption = (generation:string) => sql`and generation = ${generation}`;

    const laptops = await sql<Laptop[]>`
    select * from laptops 
    where brand = ${vendor} 
    and line = ${line} 
    ${generation ? generationOption(generation) : sql``}
    `;
    console.log(laptops)
    return laptops
}

export async function getLaptopsCount(searchQuery = "%"){
    const count = await sql<GenericSingleRow<number, "count">[]>`
        select count(*) from laptops
        where lower(concat(brand, line, model)) like lower(${`%${searchQuery}%`})
    `
    return count[0].count
}
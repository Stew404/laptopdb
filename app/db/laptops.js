import sql from "./db"

const ELEMS_PER_PAGE = 10

export async function getLaptops(searchQuery = "%", page = 1){

    const laptops = await sql`
        select * from laptops
        where lower(concat(brand, line, model)) like lower(${`%${searchQuery}%`})
        order by date_edited desc
        limit ${ELEMS_PER_PAGE} offset ${ELEMS_PER_PAGE * (page - 1)}
    `
    return laptops
}

export async function getLaptopByID(id){
    if(!id){
        return null
    }

    const laptop = await sql`
    select * from laptops where id = ${id}
    `

    return laptop[0]
}

export async function getLaptopsCount(searchQuery = "%"){
    const count = await sql`
        select count(*) from laptops
        where lower(concat(brand, line, model)) like lower(${`%${searchQuery}%`})
    `
    return count[0].count
}
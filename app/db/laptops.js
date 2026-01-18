import sql from "./db"

export async function getLaptops(){
    const laptops = await sql`
        select * from laptops
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
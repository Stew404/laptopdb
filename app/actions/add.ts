import sql from "../db/db"
import { LaptopFormAddSchema } from "../lib/schemas"
import { GenericSingleRow, Laptop } from "../types"
import uploadFile from "./uploadFile"

export default async function add(formData: FormData){
    "use server"
    const formDataEntries = [...formData.entries()]
    const { laptop_image, ...otherData } = LaptopFormAddSchema.parse(
        Object.fromEntries(formDataEntries)
    );

    let id;
    try {
        id = await sql<GenericSingleRow<Laptop["id"], "id">[]>`
            INSERT INTO LAPTOPS ${
            sql(otherData)
            
        }
        RETURNING id
        `
        id = id[0].id
    } catch (error) {
        console.log(error)
        return {message: "Ошибка добавления в базу данных"}
    }


    const path = await uploadFile(`/laptops/laptop-${id}.${laptop_image.type.split("/")[1]}`, laptop_image)
    
    if(typeof path !== "string"){
        console.error("Invalid image path")
        return { message: "Ошибка загрузки изображения" };
    }

    try {
        await sql`
            UPDATE laptops
            SET laptop_image = ${path}
            WHERE id = ${id}
        `
        return {message: "Ноутбук добавлен"}
    } catch (error){
        console.log(error)
        return {message: "Произошла ошибка загрузки изображения"}
    }
}
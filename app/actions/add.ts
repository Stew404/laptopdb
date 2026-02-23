import sql from "../db/db"
import { GenericSingleRow, Laptop } from "../types"
import uploadFile from "./uploadFile"

export default async function add(formData: FormData){
    "use server"
    const formDataEntries = [...formData.entries()].filter((elem) => {
        return elem[1] !== ""
    })
    const {laptop_image, ...otherData} = Object.fromEntries(formDataEntries)

    if (typeof laptop_image === "string") {
        return new Error("Invalid image type");
    }

    let id;
    otherData["is_touchscreen"] = otherData["is_touchscreen"] === 'true' ? "true" : "false"
    try {
        id = await sql<GenericSingleRow<Laptop["id"], "id">[]>`
            INSERT INTO LAPTOPS ${
            sql(otherData)
            
        }
        RETURNING id
        `
    } catch (error) {
        console.log(error)
        return {message: "Произошла ошибка"}
    }

    id = id[0].id

    const path = await uploadFile(`/laptops/laptop-${id}.${laptop_image.type.split("/")[1]}`, laptop_image)
    
    if(typeof path !== "string"){
        return new Error("Invalid image path")
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
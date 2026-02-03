import sql from "../db/db"
import uploadFile from "./uploadFile"

export default async function add(formData){
    "use server"
    const formDataEntries = [...formData.entries()].filter((elem, index) => {
        return elem[1] !== ""
    })
    const {laptop_image, ...otherData} = Object.fromEntries(formDataEntries)

    let id;

    

    otherData["is_touchscreen"] = otherData["is_touchscreen"] === 'true' 
    try {
        id = await sql `
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
    try {
        await sql `
            UPDATE laptops
            SET laptop_image = ${path}
            WHERE id =${id}
        `
        return {message: "Ноутбук добавлен"}
    } catch (error){
        console.log(error)
        return {message: "Произошла ошибка загрузки изображения"}
    }
}
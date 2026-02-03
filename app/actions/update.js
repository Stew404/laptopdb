import sql from "../db/db"
import uploadFile from "./uploadFile"

export default async function update(formData){
    "use server"
    const formDataEntries = [...formData.entries()].filter((elem, index) => {
        return elem[1] !== ""
    })
    const {id, laptop_image, ...otherData} = Object.fromEntries(formDataEntries)

    console.log(laptop_image)

    if(laptop_image.size){
        const path = await uploadFile(`/laptops/laptop-${id}.${laptop_image.type.split("/")[1]}`, laptop_image)

        otherData.laptop_image = path   
    }

    otherData["is_touchscreen"] = otherData["is_touchscreen"] === 'true' 
    try {
        await sql `UPDATE LAPTOPS SET ${
            sql(otherData)
        } where id=${id}`

        await sql`UPDATE laptops
        SET date_edited = LOCALTIMESTAMP
        WHERE id=${id}`

        return {message: "Ноутбук изменен"}
    } catch (error) {
        console.log(error)
        return {message: "Произошла ошибка"}
    }

}
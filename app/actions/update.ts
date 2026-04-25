import sql from "../db/db"
import { LaptopFormSchema } from "../lib/schemas"
import uploadFile from "./uploadFile"

export default async function update(formData: FormData){
    "use server"
    const formDataEntries = [...formData.entries()]
    const {id, laptop_image, ...otherData} = LaptopFormSchema.parse(
        Object.fromEntries(formDataEntries)
    );

    let dataToSend : typeof otherData & {laptop_image?: string} = {...otherData}

    if (laptop_image) {
        const path = await uploadFile(
            `/laptops/laptop-${id}.${laptop_image.type.split("/")[1]}`,
            laptop_image
        );

        if (typeof path !== "string") {
            console.error("Invalid image path")
            return { message: "Ошибка загрузки изображения" };
        }

        dataToSend.laptop_image = path
    }

    try {
        await sql`UPDATE LAPTOPS SET ${sql(dataToSend)} where id=${id}`;

        await sql`UPDATE laptops
        SET date_edited = LOCALTIMESTAMP
        WHERE id=${id}`

        return {message: "Ноутбук изменен"}
    } catch (error) {
        console.error(error)
        return {message: "Произошла ошибка"}
    }

}
import { unlink } from "fs/promises"
import sql from "../db/db"
import { GenericSingleRow, Laptop } from "../types"

export default async function remove(id: Laptop["id"]){
    "use server"
    try {
        const imagePath = await sql<GenericSingleRow<Laptop["laptopImage"], "laptopImage">[]> `SELECT laptop_image FROM laptops WHERE id = ${id}`
        console.log(imagePath[0].laptopImage)

        if(imagePath[0].laptopImage){
            await unlink(`${process.cwd()}/public/${imagePath[0].laptopImage}`)
        }

        await sql `DELETE FROM LAPTOPS 
        WHERE id = ${id}`

        return {message: "Ноутбук удален"}
    } catch (error) {
        console.log(error)
        return {message: "Произошла ошибка"}
    }
}
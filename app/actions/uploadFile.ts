import { PathLike } from "node:fs";
import { writeFile } from "node:fs/promises";

export default async function uploadFile(path: PathLike, file: File){
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    try {
        await writeFile(`${process.cwd()}/public/${path}`, buffer);

        return path
    } catch (error) {
        console.log("Upload file failed")
        console.log(error)
    }
} 
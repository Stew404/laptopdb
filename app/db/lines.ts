import sql from "./db"
import { LineWithGenerations, LineWithModels } from "@/app/types";

export async function getLinesWithModels(){
    const linesWithModels = await sql<LineWithModels[]>`
        SELECT line, json_agg(json_build_array(model, id)) as models FROM laptops GROUP BY line
    `
    console.log(linesWithModels)
    return Object.fromEntries(linesWithModels.map(lines => [
            lines.line, 
            [...lines.models.map(model => ({name: model[0], id: model[1]}))]
            ]
        )
        )
}

export async function getLinesWithGenerations() {
    const linesWithGenerations = await sql<LineWithGenerations[]>`
    SELECT 
    line, 
    COALESCE(
        array_agg(distinct generation) FILTER (WHERE generation IS NOT NULL),
        '{}'
    ) AS generations
    FROM laptops
    GROUP BY line
    `;

    return Object.fromEntries(linesWithGenerations.map(line => [line.line, line.generations]))
}
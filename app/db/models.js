import sql from "./db"

export async function getModelsWithLaptops(){
    const modelsWithLaptops = await sql`
        SELECT model_name, array_agg(id) FROM public.laptops GROUP BY model_name 
    `
    return Object.fromEntries(modelsWithLaptops.map(models => [models.modelName, models.arrayAgg]))
}
import sql from "./db"

export async function getVendors(){
    const vendors = await sql`
    SELECT DISTINCT manufacturer FROM public.laptops
    `

    return vendors
}

export async function getVendorsList(){
    const vendors = await sql`
    SELECT DISTINCT manufacturer FROM public.laptops
    `

    return vendors.map(vendor => vendor.manufacturer)
}

export async function getVendorsWithModels(){
    const vendorsWithModels = await sql`
    SELECT manufacturer, array_agg(distinct model_name) FROM public.laptops GROUP BY manufacturer
    `
    return Object.fromEntries(vendorsWithModels.map(vendors => [vendors.manufacturer, vendors.arrayAgg]))
}
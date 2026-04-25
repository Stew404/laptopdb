import sql from "./db"
import { VendorColumn, VendorWithLines } from "@/app/types";

export async function getVendors(){
    const vendors = await sql<VendorColumn[]>`
    SELECT DISTINCT brand FROM laptops
    `
    
    return vendors
}

export async function getVendorsList(){
    const vendors = await sql<VendorColumn[]>`
    SELECT DISTINCT brand FROM laptops
    `;

    return vendors.map(vendor => vendor.brand)
}

export async function getVendorsWithLines(){
    const vendorsWithLines = await sql<VendorWithLines[]>`
    SELECT brand, array_agg(distinct line) as lines FROM laptops GROUP BY brand
    `;
    return Object.fromEntries(vendorsWithLines.map(vendors => [vendors.brand, vendors.lines]))
}
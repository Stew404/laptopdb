import z from "zod";

export const zodFormString = <T extends z.ZodTypeAny>(schema: T) =>
    z.preprocess((value) => (value ? String(value).trim() : null), schema);

export const zodFormNumber = <T extends z.ZodTypeAny>(schema: T) =>
    z.preprocess((value) => {
        const num = Number(value);
        console.log(value, num);
        return isNaN(num) ? null : num;
    }, schema);

export const zodFormFloat = <T extends z.ZodTypeAny>(schema: T) =>
    z.preprocess((value) => {
        const num = Number(value);
        return Number.isInteger(num) ? null : num;
    }, schema);

export const zodFormBoolean= <T extends z.ZodTypeAny>(schema: T) => 
    z.preprocess((value) => {
        return value === "true" 
            ? true 
            : value === "false"
                ? false 
                : null
    }, schema);

export const zodFormLaptopImage = <T extends z.ZodTypeAny>(schema: T) =>
z.preprocess((value)=>{
    if(value instanceof File){
        return value.size === 0 ? undefined : value
    }
}, schema)

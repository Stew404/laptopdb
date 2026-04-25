import z from "zod";
import { zodFormBoolean, zodFormFloat, zodFormLaptopImage, zodFormNumber, zodFormString } from "./zod-helpers";

export const LaptopFormSchema = z.object({
    id: zodFormNumber(z.number()),

    brand: zodFormString(z.string()),
    model: zodFormString(z.string()),
    line: zodFormString(z.string()),

    cpu: zodFormString(z.string()),
    gpu: zodFormString(z.string().nullable()),
    igpu: zodFormString(z.string().nullable()),
    generation: zodFormString(z.string().nullable()),

    ram: zodFormNumber(z.number()),
    memory: zodFormNumber(z.number()),

    battery: zodFormString(z.string().nullable()),
    power_block: zodFormString(z.string().nullable()),

    resolution: zodFormString(z.string()),
    matrix_frequency: zodFormNumber(z.number()),
    matrix_type: zodFormString(z.string().nullable()),
    brightness: zodFormNumber(z.number().nullable()),
    matrix_cover: zodFormString(z.string().nullable()),

    is_touchscreen: zodFormBoolean(z.boolean()),
    display_angle: zodFormFloat(z.float32().nullable()),

    keyboard: zodFormString(z.string().nullable()),
    trackpad: zodFormString(z.string().nullable()),
    webcam: zodFormString(z.string().nullable()),
    sound: zodFormString(z.string().nullable()),

    ports: zodFormString(z.string().nullable()),
    connection: zodFormString(z.string().nullable()),

    size: zodFormString(z.string().nullable()),
    weight: zodFormFloat(z.float32().nullable()),
    material: zodFormString(z.string().nullable()),
    replaceable_components: zodFormString(z.string().nullable()),

    laptop_image: zodFormLaptopImage(z.instanceof(File).optional()),

    release_year: zodFormNumber(z.number()),
});

export const LaptopFormAddSchema = LaptopFormSchema
    .omit({id: true})
    .required({laptop_image: true})
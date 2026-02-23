export interface Laptop {
    id: number;

    brand: string;
    model: string;
    line: string;

    cpu: string;
    gpu: string | null;
    igpu: string | null;
    generation: string | null;

    ram: number;
    memory: number;

    battery: string | null;
    powerBlock: string | null;

    resolution: string;
    matrixFrequency: number;
    matrixType: string | null;
    brightness: number | null;
    matrixCover: string | null;

    isTouchscreen: boolean;
    displayAngle: number | null;

    keyboard: string | null;
    trackpad: string | null;
    webcam: string | null;
    sound: string | null;

    ports: string | null;
    connection: string | null;

    size: string | null;
    weight: number | null;
    material: string | null;
    replaceableComponents: string | null;

    laptopImage: string | null;

    releaseYear: number;

    dateCreated: Date;
    dateEdited: Date;
}

export type VendorColumn = Pick<Laptop, "brand">
export type LineColumn = Pick<Laptop, "line">

export type VendorWithLines = {
    brand: Laptop["brand"],
    lines: Laptop["line"][]
}

export type LineWithModels = {
    line: Laptop["line"];
    models: [Laptop["model"], Laptop["id"]][];
};

export type LineWithGenerations = {
    line: Laptop["line"];
    generations: Laptop["generation"][];
}

export type GenericSingleRow<T, K extends string> = {
    [key in K]: T;
};

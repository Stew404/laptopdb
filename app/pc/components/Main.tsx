'use client'

import { Laptop } from "../../types";

export default function Main({ laptopData } : { laptopData: Laptop}) {
    console.log(laptopData);
    return (
        <main className="h-full flex items-center">
            <div className="text-[24px]">
                <p><b>Производитель: </b> {laptopData.brand}</p>
                <p><b>Модель: </b> {laptopData.model}</p>
                <p><b>Размер дисплея: </b> {laptopData.resolution}</p>
                <p><b>Процессор: </b> {laptopData.cpu}</p>
                <p><b>Объем ОЗУ: </b> {laptopData.ram}</p>
                <p><b>Внутренняя память: </b> {laptopData.memory}</p>
                <p><b>Графическое ядро: </b> {laptopData.gpu}</p>
                <p><b>Вес: </b> {laptopData.weight}</p>
            </div>
        </main>
    );
}
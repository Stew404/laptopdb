import { Laptop } from "@/app/types";
import Image from "next/image";
import { Component } from "react";

export default function LaptopInfo({laptop}: {laptop: Laptop}){

    return (
        <div className="flex gap-[3rem] w-full h-full py-[2rem] px-[1rem] text-[24px]">
            {/* <p>
                <b>Модель: </b> {laptop.model}
            </p>
            <p>
                <b>Размер дисплея: </b> {laptop.resolution}
            </p>
            <p>
                <b>Процессор: </b> {laptop.cpu}
            </p>
            <p>
                <b>Объем ОЗУ: </b> {laptop.ram}
            </p>
            <p>
                <b>Внутренняя память: </b> {laptop.memory}
            </p>
            <p>
                <b>Графическое ядро: </b> {laptop.gpu}
            </p>
            <p>
                <b>Вес: </b> {laptop.weight}
            </p> */}

            <div className="w-1/3">
                <div className="w-full aspect-square relative">
                    <Image
                        className=""
                        src={laptop.laptopImage}
                        fill={true}
                        alt="laptop image"
                    />
                </div>

                <div>
                    <h3>
                        {laptop.brand} {laptop.line} {laptop.generation ?? ""}{" "}
                        <span className="text-[1.2rem] opacity-[.5]">
                            {laptop.model}
                        </span>
                    </h3>
                    <p className="flex justify-between">
                        <span className="font-normal">Год выхода:</span>{" "}
                        {laptop.releaseYear}
                    </p>
                    <p className="flex justify-between">
                        <span className="font-normal">Процессор:</span>{" "}
                        {laptop.cpu}
                    </p>
                    <p className="flex justify-between">
                        {laptop.igpu && (
                            <>
                                <span className="font-normal">
                                    Встроенное GPU:{" "}
                                </span>{" "}
                                {laptop.igpu}
                            </>
                        )}
                    </p>
                    <p className="flex justify-between">
                        <span className="font-normal">GPU: </span> {laptop.gpu}
                    </p>
                    <p className="flex justify-between">
                        <span className="font-normal">Объем ОЗУ: </span>{" "}
                        {laptop.ram} ГБ
                    </p>
                </div>
            </div>
            <div className="w-1/3">
                <div>
                    <h3>Ввод и мультимедиа</h3>
                    <p className="flex justify-between">
                        {laptop.keyboard && (
                            <>
                                <span className="font-normal">Клавиатура:</span>
                                {laptop.keyboard}
                            </>
                        )}
                    </p>
                    <p className="flex justify-between">
                        {laptop.trackpad && (
                            <>
                                <span className="font-normal">Трекпад:</span>
                                {laptop.trackpad}
                            </>
                        )}
                    </p>

                    <p className="flex justify-between">
                        {laptop.webcam && (
                            <>
                                <span className="font-normal">Веб-камера:</span>
                                {laptop.webcam}
                            </>
                        )}
                    </p>

                    <p className="flex justify-between">
                        {laptop.sound && (
                            <>
                                <span className="font-normal">Звук:</span>
                                {laptop.sound}
                            </>
                        )}
                    </p>
                </div>
                <div>
                    <h3>Экран</h3>
                    <p className="flex justify-between">
                        <span className="font-normal">Разрешение:</span>{" "}
                        {laptop.resolution}
                    </p>

                    <p className="flex justify-between">
                        {laptop.matrixFrequency && (
                            <>
                                <span className="font-normal">
                                    Частота матрицы:
                                </span>
                                {laptop.matrixFrequency} Гц
                            </>
                        )}
                    </p>
                    <p className="flex justify-between">
                        {laptop.matrixType && (
                            <>
                                <span className="font-normal">
                                    Тип матрицы:
                                </span>
                                {laptop.matrixType}
                            </>
                        )}
                    </p>

                    <p className="flex justify-between">
                        {laptop.matrixCover && (
                            <>
                                <span className="font-normal">
                                    Покрытие матрицы:
                                </span>
                                {laptop.matrixCover}
                            </>
                        )}
                    </p>

                    <p className="flex justify-between">
                        {laptop.brightness && (
                            <>
                                <span className="font-normal">Яркость:</span>
                                {laptop.brightness} нит
                            </>
                        )}
                    </p>

                    <p className="flex justify-between">
                        <span className="font-normal">Сенсорный экран:</span>
                        {laptop.isTouchscreen ? "Да" : "Нет"}
                    </p>

                    <p className="flex justify-between">
                        {laptop.displayAngle && (
                            <>
                                <span className="font-normal">
                                    Угол отображения:
                                </span>
                                {laptop.displayAngle}
                            </>
                        )}
                    </p>
                </div>
            </div>
            <div className="w-1/3">
                <div>
                    <h3>Порты</h3>
                    <ul>
                        {laptop.ports?.split(",").map((port) => {
                            return <li key={port} className="font-normal">- {port}</li>;
                        })}
                    </ul>
                </div>
                <div>
                    <h3>Беспроводные соединения</h3>
                    <ul>
                        {laptop.connection?.split(",").map((connection) => {
                            return (
                                <li key={connection} className="font-normal">
                                    - {connection}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h3>Корпус и габариты</h3>
                    <p className="flex justify-between">
                        {laptop.size && (
                            <>
                                <span className="font-normal">Размеры:</span>
                                {laptop.size}
                            </>
                        )}
                    </p>
                    <p className="flex justify-between">
                        {laptop.weight && (
                            <>
                                <span className="font-normal">Вес:</span>
                                {laptop.weight}
                            </>
                        )}
                    </p>
                    <p className="flex justify-between">
                        {laptop.material && (
                            <>
                                <span className="font-normal">
                                    Материал корпуса:
                                </span>
                                {laptop.material}
                            </>
                        )}
                    </p>
                </div>
                <div>
                    <h3>Заменяемые компоненты</h3>
                    <ul>
                        {laptop.replaceableComponents
                            ?.split(",")
                            .map((component) => {
                                return (
                                    <li key={component} className="font-normal">
                                        - {component}
                                    </li>
                                );
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
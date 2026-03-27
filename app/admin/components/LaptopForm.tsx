"use client"

import {useMessage} from "@/app/hooks/useMessage";
import Image from "next/image";
import { redirect } from "next/navigation";
import imageIcon from "@/public/add-image.svg"
import { ChangeEvent, useState } from "react";
import { Laptop } from "@/app/types";

export default function LaptopForm({action, data = null}: {action: (formdata: FormData) => Promise<{message: string}>, data?: Laptop | null}){
    
    const fieldsetDivStyle =
        "grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-[1.5rem]";

    const heading = data ? "Редактирование" : "Добавление";

    const setMessage = useMessage((state)=>(state.setMessage))

    const [uploadedFileName, setUploadedFileName] = useState("")
    
    const formAction = async (formData: FormData)=>{
        console.log(formData.get("laptop_image"))

        const {message} = await action(formData)

        setMessage(message);
        redirect("/admin")
    }

    const imageInputHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            setUploadedFileName(e.target.files[0].name);
        }
    }

    return (
        <div className="max-w-[100rem] w-full mx-auto block-bg p-[2.5rem] my-[3rem] rounded-[50px]">
            <header className="flex items-center justify-between mb-[2rem]">
                <button
                    className="underline"
                    onClick={() => {
                        history.back();
                    }}
                >
                    ← Назад
                </button>
                <h2 className=" text-center">{heading} ноутбука</h2>
                <div className="w-[5rem]"></div>
            </header>
            <form
                className="max-w-[100rem] w-full mx-auto block-bg p-[2.5rem] my-[3rem] rounded-[50px]"
                action={formAction}
            >
                {data && <input type="hidden" name="id" value={data.id} />}
                <fieldset className="flex justify-between">
                    <legend>Основная информация</legend>
                    <div className={fieldsetDivStyle + " w-3/5"}>
                        <div>
                            <label>Бренд *</label>
                            <input
                                type="text"
                                name="brand"
                                defaultValue={data?.brand}
                                required
                            />
                        </div>
                        <div>
                            <label>Линейка *</label>
                            <input
                                type="text"
                                name="line"
                                defaultValue={data?.line}
                                required
                            />
                        </div>
                        <div>
                            <label>Модель *</label>
                            <input
                                type="text"
                                name="model"
                                defaultValue={data?.model}
                                required
                            />
                        </div>
                        <div>
                            <label>Год выпуска *</label>
                            <input
                                type="number"
                                name="release_year"
                                defaultValue={data?.releaseYear}
                                required
                            />
                        </div>
                        <div>
                            <label>Поколение</label>
                            <input
                                type="text"
                                name="generation"
                                defaultValue={
                                    data?.generation ? data?.generation : ""
                                }
                            />
                        </div>
                    </div>
                    <label>
                        Изображение *
                        <div className="relative w-[30rem] h-[30rem] mt-[.4rem] bg-(--input-background) hover:bg-gray-50 cursor-pointer rounded-[3rem] overflow-hidden">
                            <input
                                onChange={imageInputHandler}
                                className="absolute opacity-0 h-[0px]"
                                type="file"
                                name="laptop_image"
                                accept="image/png, image/jpeg, image/webp"
                                required={
                                    !(data?.laptopImage && !uploadedFileName)
                                }
                            />
                            <p className="w-full h-full flex flex-col justify-center items-center">
                                <Image
                                    className="w-[10rem] h-[10rem]"
                                    src={imageIcon}
                                    alt="Upload image icon"
                                />
                                <span>Загрузить файл</span>
                                {uploadedFileName && (
                                    <span>{uploadedFileName}</span>
                                )}
                            </p>
                            {data?.laptopImage && !uploadedFileName && (
                                <Image
                                    className="absolute top-0 left-0 hover:opacity-70"
                                    src={data.laptopImage}
                                    fill={true}
                                    alt="laptop image"
                                />
                            )}
                        </div>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Производительность</legend>
                    <div className={fieldsetDivStyle}>
                        <div>
                            <label>CPU *</label>
                            <input
                                type="text"
                                name="cpu"
                                defaultValue={data?.cpu}
                                required
                            />
                        </div>
                        <div>
                            <label>GPU *</label>
                            <input
                                type="text"
                                name="gpu"
                                defaultValue={data?.gpu ? data?.gpu : ""}
                                required
                            />
                        </div>
                        <div>
                            <label>iGPU</label>
                            <input
                                type="text"
                                name="igpu"
                                defaultValue={data?.igpu ? data?.igpu : ""}
                            />
                        </div>
                        <div>
                            <label>RAM (ГБ) *</label>
                            <input
                                type="number"
                                name="ram"
                                defaultValue={data?.ram}
                                required
                            />
                        </div>
                        <div>
                            <label>Память (ГБ) *</label>
                            <input
                                type="number"
                                name="memory"
                                defaultValue={data?.memory}
                                required
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Экран</legend>
                    <div className={fieldsetDivStyle}>
                        <div>
                            <label>Разрешение *</label>
                            <input
                                type="text"
                                name="resolution"
                                defaultValue={data?.resolution}
                                required
                            />
                        </div>
                        <div>
                            <label>Частота (Гц) *</label>
                            <input
                                type="number"
                                name="matrix_frequency"
                                defaultValue={data?.matrixFrequency ? data?.matrixFrequency : ""}
                                required
                            />
                        </div>
                        <div>
                            <label>Тип матрицы</label>
                            <input
                                type="text"
                                name="matrix_type"
                                defaultValue={
                                    data?.matrixType ? data?.matrixType : ""
                                }
                            />
                        </div>
                        <div>
                            <label>Яркость (нит)</label>
                            <input
                                type="number"
                                name="brightness"
                                defaultValue={
                                    data?.brightness ? data?.brightness : ""
                                }
                            />
                        </div>
                        <div>
                            <label>Покрытие</label>
                            <input
                                type="text"
                                name="matrix_cover"
                                defaultValue={
                                    data?.matrixCover ? data?.matrixCover : ""
                                }
                            />
                        </div>
                        <div>
                            <label>Сенсорный экран *</label>
                            <select
                                name="is_touchscreen"
                                defaultValue={String(data?.isTouchscreen)}
                                required
                            >
                                <option value="false">Нет</option>
                                <option value="true">Да</option>
                            </select>
                        </div>
                        <div>
                            <label>Угол раскрытия</label>
                            <input
                                type="number"
                                step="0.1"
                                name="display_angle"
                                defaultValue={data?.displayAngle ?? ""}
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Ввод и мультимедиа</legend>
                    <div className={fieldsetDivStyle}>
                        <div>
                            <label>Клавиатура</label>
                            <input
                                type="text"
                                name="keyboard"
                                defaultValue={data?.keyboard ?? ""}
                            />
                        </div>
                        <div>
                            <label>Тачпад</label>
                            <input
                                type="text"
                                name="trackpad"
                                defaultValue={data?.trackpad ?? ""}
                            />
                        </div>
                        <div>
                            <label>Веб-камера</label>
                            <input
                                type="text"
                                name="webcam"
                                defaultValue={data?.webcam ?? ""}
                            />
                        </div>
                        <div>
                            <label>Звук</label>
                            <input
                                type="text"
                                name="sound"
                                defaultValue={data?.sound ?? ""}
                            />
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Порты и соединения</legend>
                    <div className={fieldsetDivStyle}>
                        <div>
                            <label>
                                Порты{" "}
                                <span className="text-[1.2rem] opacity-[.5]">
                                    (через запятую)
                                </span>
                            </label>
                            <textarea
                                name="ports"
                                defaultValue={data?.ports ?? ""}
                            ></textarea>
                        </div>
                        <div>
                            <label>
                                Беспроводные соединения{" "}
                                <span className="text-[1.2rem] opacity-[.5]">
                                    (через запятую)
                                </span>
                            </label>
                            <textarea
                                name="connection"
                                defaultValue={data?.connection ?? ""}
                            ></textarea>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Корпус и габариты</legend>
                    <div className={fieldsetDivStyle}>
                        <div>
                            <label>Размеры</label>
                            <input
                                type="text"
                                name="size"
                                defaultValue={data?.size ?? ""}
                            />
                        </div>
                        <div>
                            <label>Вес (кг)</label>
                            <input
                                type="number"
                                step="0.01"
                                name="weight"
                                defaultValue={data?.weight ?? ""}
                            />
                        </div>
                        <div>
                            <label>Материал корпуса</label>
                            <input
                                type="text"
                                name="material"
                                defaultValue={data?.material ?? ""}
                            />
                        </div>
                        <div>
                            <label>
                                Заменяемые компоненты{" "}
                                <span className="text-[1.2rem] opacity-[.5]">
                                    (через запятую)
                                </span>
                            </label>
                            <textarea
                                name="replaceable_components"
                                defaultValue={data?.replaceableComponents ?? ""}
                            ></textarea>
                        </div>
                    </div>
                </fieldset>

                <button
                    className="mx-auto w-[15rem] h-[5rem] button rounded-[10px]"
                    type="submit"
                >
                    Сохранить
                </button>
            </form>
        </div>
    );
}
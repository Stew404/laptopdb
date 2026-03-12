import { FC } from "react";
import ListGroup from "../ui/ListGroup";
import Field from "../ui/Field";
import { useBaseLaptop } from "@/app/hooks/useBaseLaptop";

const LaptopStaticInfo: FC = ()=>{
    const {baseLaptop} = useBaseLaptop()

    return (
        <>
            {baseLaptop && (
                <>
                    <div className="w-1/3">
                        <div>
                            <h3>Ввод и мультимедиа</h3>
                            <Field
                                label="Клавиатура"
                                value={baseLaptop.keyboard}
                            />
                            <Field
                                label="Трекпад"
                                value={baseLaptop.trackpad}
                            />
                            <Field
                                label="Веб-камера"
                                value={baseLaptop.webcam}
                            />
                            <Field label="Звук" value={baseLaptop.sound} />
                        </div>
                        <div>
                            <h3>Экран</h3>
                            <Field
                                label="Разрешение"
                                value={baseLaptop.resolution}
                            />
                            <Field
                                label="Частота матрицы"
                                value={`${baseLaptop.matrixFrequency} Гц`}
                            />
                            <Field
                                label="Тип матрицы"
                                value={baseLaptop.matrixType}
                            />
                            <Field
                                label="Покрытие матрицы"
                                value={baseLaptop.matrixCover}
                            />
                            <Field
                                label="Яркость"
                                value={`${baseLaptop.brightness} нит`}
                            />
                            <Field
                                label="Сенсорный экран"
                                value={baseLaptop.isTouchscreen ? "Да" : "Нет"}
                            />
                            <Field
                                label="Угол отображения"
                                value={baseLaptop.displayAngle}
                            />
                        </div>
                    </div>
                    <div className="w-1/3">
                        <ListGroup
                            elements={
                                baseLaptop.ports
                                    ? baseLaptop.ports.split(",")
                                    : []
                            }
                            heading="Порты"
                        />
                        <ListGroup
                            elements={
                                baseLaptop.connection
                                    ? baseLaptop.connection.split(",")
                                    : []
                            }
                            heading="Беспроводные соединения"
                        />
                        <ListGroup
                            elements={
                                baseLaptop.replaceableComponents
                                    ? baseLaptop.replaceableComponents.split(
                                          ","
                                      )
                                    : []
                            }
                            heading="Заменямые компоненты"
                        />
                    </div>
                </>
            )}
        </>
    );
}
export default LaptopStaticInfo
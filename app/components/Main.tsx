'use client'
export default function Main({ laptopData }) {
    console.log(laptopData);
    return (
        <main className="h-full flex items-center">
            <div className="text-[24px]">
                <p><b>Производитель: </b> {laptopData.manufacturer}</p>
                <p><b>Формфактор: </b> {laptopData.category}</p>
                <p><b>Модель: </b> {laptopData.modelName}</p>
                <p><b>Размер дисплея: </b> {laptopData.screenSize}</p>
                <p><b>Процессор: </b> {laptopData.cpu}</p>
                <p><b>Объем ОЗУ: </b> {laptopData.ram}</p>
                <p><b>Внутренняя память: </b> {laptopData.storage}</p>
                <p><b>Графическое ядро: </b> {laptopData.gpu}</p>
                <p><b>Вес: </b> {laptopData.weight}</p>
            </div>
        </main>
    );
}
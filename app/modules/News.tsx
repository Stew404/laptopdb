import Image from "next/image";
import exampleImg from "@/public/new-example.png"
const NEWS_BLOCKS = [
    [
        "Компания MSI представила на выставке CES 2026 новые модели Prestige 14 и Prestige 16. Они созданы для профессионалов, которым необходима исключительная производительность, мобильность и дизайн.",
        "ASUS представила ROG Zephyrus Duo — ноутбук с двумя полноразмерными 16-дюймовыми дисплеями и высококачественным игровым оборудованием.",
        // "HP представила OmniBook Ultra 14 — ультрапортативный ноутбук премиум-класса, построенный на основе ультратонкого, но ориентированного на долговечность дизайна.",
        // "HP представила OmniBook Ultra 14 — ультрапортативный ноутбук премиум-класса, построенный на основе ультратонкого, но ориентированного на долговечность дизайна.",
    ],
    [
        "Дефицит SSD-накопителей и жёстких дисков (HDD). Производители, дистрибьюторы и продавцы электроники сообщили о нехватке этих комплектующих.",
        "Прогноз роста цен. Специалисты предупреждают, что в 2026 году нехватка накопителей и рост их цен, скорее всего, продолжатсяю.",
        // "Подорожание блоков питания и систем охлаждения. Китайская компания Guangzhou Xinhong Zhengdian Electronic Technology сообщила о резком увеличении операционных расходов.",
        // "Прогноз цен на радиаторы и процессорные кулеры. Предполагается, что они вырастут в цене на 6–8%.",
    ],
    [
        "Представление Honor Power 2. Компания Honor представила новый суперавтономный смартфон, главной особенностью которого стала батарея 10 080 мАч при компактном корпусе.",
        "Представление Clicks Communicator. Американская компания Clicks представила свой первый смартфон, который получил Android 16, лаунчер с мессенджерами и сканер в клавише «Пробел».",
        // "Сообщение о выходе iPhone с камерой 200 Мп. По информации китайского инсайдера, компания Apple может выпустить первый iPhone с 200-мегапиксельной камерой в течение нескольких лет.",
        // "Сообщение о выходе Samsung Galaxy S26. Ожидается, что устройство представят 25 февраля.",
    ],
];

export default function News (){

    const BLOCK_STYLES = [
        "w-5/20 p-[1rem] flex flex-col items-center justify-between main-border block-bg main-shadow rounded-[50px] rounded-bl-[10px]",
        "w-5/10 flex flex-col items-center justify-between mx-[.8rem]",
        "w-5/20 p-[1rem] flex flex-col items-center justify-between main-border block-bg main-shadow rounded-[50px] rounded-br-[10px]",
    ];

    return(
        <section className="max-h-[80rem] flex justify-between p-[.4rem] pb-[.6rem] section-border main-shadow section-bg rounded-[50px] rounded-b-[10px] mt-[1.5rem]">
            {NEWS_BLOCKS.map((block, blockIndex)=>{
                return (
                    <div
                        className={BLOCK_STYLES[blockIndex]}
                        key={`block-${blockIndex}`}
                    >
                        {block.map((article, index) => {
                            return (
                                <div
                                    className={`last:mb-0 mb-[1rem] rounded-[50px] overflow-hidden  ${
                                        blockIndex == 1
                                            ? "h-[44%] p-[.6rem] block-bg main-shadow main-border overflow-visible"
                                            : "h-1/2 main-shadow main-border"
                                    }

                                    ${
                                        blockIndex == 0
                                            ? "last:rounded-bl-[10px]"
                                            : blockIndex == 2
                                            ? "last:rounded-br-[10px]"
                                            : ""
                                    }`}
                                    key={`article-${blockIndex}-${index}`}
                                >
                                    <a
                                        className={`h-full text-center flex flex-col items-center mb-[1rem] last:mb-[0rem] button 
                                        ${
                                            blockIndex == 1
                                                ? "rounded-[50px]"
                                                : ""
                                        }`}
                                        href=""
                                    >
                                        <div className="w-full h-11/20 overflow-hidden rounded-t-[50px]">
                                            <Image
                                                className="w-full h-full object-cover"
                                                src={exampleImg}
                                                alt="news-img"
                                            />
                                        </div>
                                        <p className="h-1/2 px-[.5rem] pt-[1rem]">
                                            {article}
                                        </p>
                                    </a>
                                </div>
                            );
                        })}
                        {blockIndex == 1 && (
                            <div className="w-full h-[7rem] p-[.6rem] main-border main-shadow block-bg rounded-t-[50px]">
                                <button className="w-full h-full button rounded-t-[50px]">
                                    <p>⇊ ⇊ Все новости ⇊ ⇊</p>
                                </button>
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    )
}
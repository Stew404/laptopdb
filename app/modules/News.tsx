import Image from "next/image";
import exampleImg from "@/public/new-example.png";
const NEWS_BLOCKS = [
  [
    "Компания MSI представила на выставке CES 2026 новые модели Prestige 14 и Prestige 16. Они созданы для профессионалов, которым необходима исключительная производительность, мобильность и дизайн.",
    "ASUS представила ROG Zephyrus Duo — ноутбук с двумя полноразмерными 16-дюймовыми дисплеями и высококачественным игровым оборудованием.",
  ],
  [
    "Дефицит SSD-накопителей и жёстких дисков (HDD). Производители, дистрибьюторы и продавцы электроники сообщили о нехватке этих комплектующих.",
    "Прогноз роста цен. Специалисты предупреждают, что в 2026 году нехватка накопителей и рост их цен, скорее всего, продолжатсяю.",
  ],
  [
    "Представление Honor Power 2. Компания Honor представила новый суперавтономный смартфон, главной особенностью которого стала батарея 10 080 мАч при компактном корпусе.",
    "Представление Clicks Communicator. Американская компания Clicks представила свой первый смартфон, который получил Android 16, лаунчер с мессенджерами и сканер в клавише «Пробел».",
  ],
];

export default function News() {
  const BLOCK_STYLES = [
    "w-5/20 p-[1rem] flex flex-col items-center justify-between main-border block-bg main-shadow rounded-[4rem] rounded-bl-[2rem]",
    "w-5/10 flex flex-col items-center justify-between mx-[1rem]",
    "w-5/20 p-[1rem] flex flex-col items-center justify-between main-border block-bg main-shadow rounded-[4rem] rounded-br-[2rem]",
  ];

  return (
    <section className="max-h-[80rem] flex justify-between p-[1rem] section-border main-shadow section-bg rounded-[4rem] rounded-b-[2rem] mt-[1.5rem] gap-[1rem]">
      {NEWS_BLOCKS.map((block, blockIndex) => {
        return (
          <div className={BLOCK_STYLES[blockIndex]} key={`block-${blockIndex}`}>
            {block.map((article, index) => {
              return (
                <div
                  className={`last:mb-0 mb-[1rem] rounded-[3.6rem] overflow-hidden ${
                    blockIndex == 1
                      ? "h-[44%] p-[.8rem] block-bg main-shadow main-border overflow-visible"
                      : "h-1/2 main-shadow main-border"
                  }
                  ${
                    blockIndex == 0
                      ? "last:rounded-bl-[2rem]"
                      : blockIndex == 2
                        ? "last:rounded-br-[2rem]"
                        : ""
                  }`}
                  key={`article-${blockIndex}-${index}`}
                >
                  <a
                    className={`h-full text-center flex flex-col items-center mb-[1rem] last:mb-[0rem] button ${
                      blockIndex == 1 ? "rounded-[3.2rem]" : ""
                    }`}
                    href=""
                  >
                    <div className="w-full h-11/20 overflow-hidden rounded-t-[3.6rem]">
                      <Image
                        className="w-full h-full object-cover"
                        src={exampleImg}
                        alt="news-img"
                      />
                    </div>
                    <p className="h-1/2 px-[1rem] pt-[1.2rem] leading-[1.35]">
                      {article}
                    </p>
                  </a>
                </div>
              );
            })}
            {blockIndex == 1 && (
              <div className="w-full h-[7rem] p-[.8rem] main-border main-shadow block-bg rounded-[3.6rem] rounded-b-[2rem] mt-[.2rem]">
                <button className="w-full h-full button rounded-[3rem]">
                  <p>⇊ ⇊ Все новости ⇊ ⇊</p>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}

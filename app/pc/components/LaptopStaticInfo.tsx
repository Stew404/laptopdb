import { FC } from "react";
import { useBaseLaptop } from "@/app/hooks/useBaseLaptop";

function SpecRow({
    label,
    value,
}: {
    label: string;
    value?: string | number | null;
}) {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-[1rem] items-start rounded-[1.8rem] px-[1.2rem] py-[.95rem] neo-inset">
            <dt className="text-[1.35rem] text-[var(--text-muted)]">{label}</dt>
            <dd className="text-[1.45rem] font-[700] text-right max-w-[23rem]">
                {value || "—"}
            </dd>
        </div>
    );
}

function SpecSection({
    title,
    icon,
    items,
}: {
    title: string;
    icon: string;
    items: [string, string | number | null | undefined][];
}) {
    return (
        <section className="main-border block-bg soft-shadow rounded-[2.8rem] p-[1.4rem] animate-spec-card">
            <div className="flex items-center gap-[.8rem] mb-[1.2rem]">
                <span className="w-[3.6rem] h-[3.6rem] rounded-full neo-inset flex items-center justify-center text-[1.7rem]">
                    {icon}
                </span>
                <h3 className="text-[2rem] leading-[1.1]">{title}</h3>
            </div>

            <dl className="flex flex-col gap-[.75rem]">
                {items.map(([label, value]) => (
                    <SpecRow key={label} label={label} value={value} />
                ))}
            </dl>
        </section>
    );
}

function ListSection({
    title,
    icon,
    elements,
}: {
    title: string;
    icon: string;
    elements: string[];
}) {
    return (
        <section className="main-border block-bg soft-shadow rounded-[2.8rem] p-[1.4rem] animate-spec-card">
            <div className="flex items-center gap-[.8rem] mb-[1.2rem]">
                <span className="w-[3.6rem] h-[3.6rem] rounded-full neo-inset flex items-center justify-center text-[1.7rem]">
                    {icon}
                </span>
                <h3 className="text-[2rem] leading-[1.1]">{title}</h3>
            </div>

            <ul className="flex flex-col gap-[.7rem]">
                {elements.length > 0 ? (
                    elements.map((item, index) => (
                        <li
                            key={`${item}-${index}`}
                            className="rounded-[1.8rem] px-[1.2rem] py-[.95rem] neo-inset text-[1.45rem] font-[700] leading-[1.35]"
                        >
                            {item.trim()}
                        </li>
                    ))
                ) : (
                    <li className="rounded-[1.8rem] px-[1.2rem] py-[.95rem] neo-inset text-[1.45rem] text-[var(--text-muted)]">
                        —
                    </li>
                )}
            </ul>
        </section>
    );
}

const LaptopStaticInfo: FC = () => {
    const { baseLaptop } = useBaseLaptop();

    if (!baseLaptop) return null;

    return (
        <div className="h-full overflow-y-auto pr-[.4rem] sidebar-scroll">
            <div className="grid grid-cols-1 2xl:grid-cols-3 gap-[1.2rem]">
                <div className="flex flex-col gap-[1.2rem]">
                    <SpecSection
                        title="Ввод и мультимедиа"
                        icon="⌨"
                        items={[
                            ["Клавиатура", baseLaptop.keyboard],
                            ["Трекпад", baseLaptop.trackpad],
                            ["Веб-камера", baseLaptop.webcam],
                            ["Звук", baseLaptop.sound],
                        ]}
                    />

                    <SpecSection
                        title="Экран"
                        icon="▣"
                        items={[
                            ["Разрешение", baseLaptop.resolution],
                            ["Частота матрицы", `${baseLaptop.matrixFrequency} Гц`],
                            ["Тип матрицы", baseLaptop.matrixType],
                            ["Покрытие", baseLaptop.matrixCover],
                            ["Яркость", `${baseLaptop.brightness} нит`],
                            ["Сенсорный экран", baseLaptop.isTouchscreen ? "Да" : "Нет"],
                            ["Угол отображения", baseLaptop.displayAngle],
                        ]}
                    />
                </div>

                <div className="flex flex-col gap-[1.2rem]">
                    <ListSection
                        title="Порты"
                        icon="↔"
                        elements={baseLaptop.ports ? baseLaptop.ports.split(",") : []}
                    />

                    <ListSection
                        title="Беспроводные соединения"
                        icon="⌁"
                        elements={baseLaptop.connection ? baseLaptop.connection.split(",") : []}
                    />
                </div>

                <div className="flex flex-col gap-[1.2rem]">
                    <ListSection
                        title="Заменяемые компоненты"
                        icon="⚙"
                        elements={
                            baseLaptop.replaceableComponents
                                ? baseLaptop.replaceableComponents.split(",")
                                : []
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default LaptopStaticInfo;
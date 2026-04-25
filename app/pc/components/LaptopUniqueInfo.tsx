import { FC } from "react";
import { useLaptop } from "@/app/hooks/useLaptop";

function SpecRow({
    label,
    value,
}: {
    label: string;
    value?: string | number | null;
}) {
    return (
        <div className="grid grid-cols-[1fr_auto] gap-[1rem] items-center rounded-[1.8rem] px-[1.2rem] py-[.95rem] neo-inset">
            <dt className="text-[1.35rem] text-[var(--text-muted)]">{label}</dt>
            <dd className="text-[1.45rem] font-[700] text-right max-w-[16rem] truncate">
                {value || "—"}
            </dd>
        </div>
    );
}

const LaptopUniqueInfo: FC = () => {
    const { laptop } = useLaptop();

    if (!laptop) return null;

    return (
        <section className="h-full flex flex-col gap-[1.2rem]">
            <div className="rounded-[2.8rem] main-border soft-shadow overflow-hidden bg-white/5">
                <div className="aspect-square flex items-center justify-center rounded-[2.8rem] overflow-hidden neo-inset">
                    <span className="text-[5rem]">💻</span>
                </div>
            </div>

            <div className="main-border block-bg soft-shadow rounded-[2.8rem] p-[1.4rem]">
                <span className="inline-flex rounded-full neo-inset px-[1.1rem] py-[.7rem] text-[1.15rem] uppercase tracking-[0.1em] font-[700] text-[var(--text-muted)]">
                    Selected model
                </span>

                <h2 className="mt-[1.2rem] text-[2.4rem] leading-[1.05]">
                    {laptop.brand} {laptop.line}
                </h2>

                <p className="mt-[.4rem] text-[1.35rem] text-[var(--text-muted)]">
                    {laptop.generation ? `Generation ${laptop.generation}` : "Base configuration"}
                </p>
            </div>

            <div className="main-border block-bg soft-shadow rounded-[2.8rem] p-[1.4rem]">
                <div className="flex items-center gap-[.8rem] mb-[1.2rem]">
                    <span className="w-[3.4rem] h-[3.4rem] rounded-full neo-inset flex items-center justify-center">
                        ✦
                    </span>
                    <h3 className="text-[2rem] leading-[1.1]">Основное</h3>
                </div>

                <dl className="flex flex-col gap-[.75rem]">
                    <SpecRow label="Год выхода" value={laptop.releaseYear} />
                    <SpecRow label="Процессор" value={laptop.cpu} />
                    <SpecRow label="Встроенное GPU" value={laptop.igpu} />
                    <SpecRow label="GPU" value={laptop.gpu} />
                    <SpecRow label="Объём ОЗУ" value={`${laptop.ram} ГБ`} />
                </dl>
            </div>
        </section>
    );
};

export default LaptopUniqueInfo;
import { useModelController } from "@/app/hooks/useModelController";

const SLIDES = [
    {
        text: "До снятия крышки открутите все винты в указанных местах",
    },
    {
        text: "Перед снятием охлаждения открутите все винты в указанных местах",
    },
    {
        text: "Разборка окончена",
    },
];

export default function DisassemblyMenu(){
    const {
        isBottomCoverHidden,
        isCoolingHidden,
        changeisBottomCoverHidden,
        changeisCoolingHidden,
    } = useModelController();

    const {disassemblyMenuStage, setNextStage, setPrevStage} = useModelController()

    return (
        <div className="w-[25rem] p-[1em] my-[15px] block-bg flex flex-col items-center">
            <p className="mb-[15px]">{SLIDES[disassemblyMenuStage].text}</p>
            {(disassemblyMenuStage === 0 || disassemblyMenuStage === 1) && (
                <button
                    className="button w-full mb-[10px]"
                    onClick={() => {
                        changeisBottomCoverHidden();
                        if (isBottomCoverHidden) setPrevStage();
                        else setNextStage();
                    }}
                >
                    {isBottomCoverHidden ? "Закрыть" : "Открыть"} нижнюю крышку
                </button>
            )}
            {(disassemblyMenuStage === 1 || disassemblyMenuStage === 2) && (
                <button
                    className="button w-full"
                    onClick={() => {
                        changeisCoolingHidden();
                        if(isCoolingHidden) setPrevStage()
                        else setNextStage()
                    }}
                >
                    {isCoolingHidden ? "Вернуть" : "Убрать"} охлаждение
                </button>
            )}
        </div>
    );
}
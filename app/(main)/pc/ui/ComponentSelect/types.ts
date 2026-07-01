import { GroupBase } from "react-select";

export interface ComponentSelectProps {
    name: string;
    id: string;
    labelOption: string;
    selectedOption: string;
    options: GroupBase<SelectOption>[];
    onChange?: (newValue: string) => void;
}
export type SelectOption = {
    value: string;
    label: string;
};

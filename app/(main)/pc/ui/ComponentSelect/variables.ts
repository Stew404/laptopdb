import { GroupBase, StylesConfig } from "react-select";
import { SelectOption } from "./types";

export const selectStyles: StylesConfig<
    SelectOption,
    false,
    GroupBase<SelectOption>
> = {
    container: (baseStyles) => ({
        ...baseStyles,
        width: "100%",
        cursor: "default",
    }),
    control: () => ({
        width: "100%",
        height: "5rem",
        textAlign: "center",
        fontSize: "1.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--button-background-color)",
        color: "var(--text-color)",
        border: "var(--border)",
        boxShadow: "var(--box-shadow)",
        transition: "background-color .2s ease",
        borderRadius: "50px",
        ":hover": {
            backgroundColor: "var(--button-hover-color)",
        },
    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        color: "var(--text-color)",
        textWrap: "nowrap",
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: () => ({
        display: "none",
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        width: "106%",
        left: "-3%",
        marginTop: "1rem",
        background: "var(--block-background)",
        border: "var(--section-border)",
        margin: "0",
        padding: "1px 1px 2px 3px",
        boxShadow: "var(--box-shadow)",
        borderRadius: "30px",
        // overflowY: "auto"
    }),
    menuList: (baseStyles) => ({
        ...baseStyles,
        // overflow: "hidden",
        oveflowY: "auto",
        padding: "0",
    }),
    noOptionsMessage: (baseStyles) => ({
        ...baseStyles,
        color: "var(--text-color)",
        fontSize: "1.2rem",
    }),
    group: (baseStyles) => ({
        ...baseStyles,
        overflow: "visible",
        padding: "0",
    }),
    groupHeading: (baseStyles) => ({
        ...baseStyles,
        textAlign: "center",
        color: "var(--text-color)",
        fontSize: "1.2rem",
    }),
    input: (baseStyles) => ({
        ...baseStyles,
        textAlign: "center",
        margin: "0 auto"
    }),
    option: (baseStyles, state) => ({
        width: "98%",
        height: "5rem",
        padding: "0",
        margin: "5px 0px",
        textAlign: "center",
        fontSize: "1.8rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--button-background-color)",
        color: "var(--text-color)",
        border: "var(--border)",
        boxShadow: "var(--box-shadow)",
        transition: "background-color .2s ease",
        borderRadius: "50px",
        ":hover": {
            backgroundColor: "var(--button-hover-color)",
        },
        opacity: state.isDisabled ? ".5" : 1,
    }),
};
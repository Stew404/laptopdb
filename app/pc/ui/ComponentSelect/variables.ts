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
    cursor: "pointer",
  }),
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: "100%",
    minHeight: "5.8rem",
    textAlign: "center",
    fontSize: "1.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "var(--button-background-color)",
    color: "var(--text-color)",
    border: "var(--border)",
    borderRadius: "999px",
    boxShadow: state.isFocused
      ? "var(--focus-ring)"
      : "var(--box-shadow-soft), var(--surface-glow)",
    transition: "transform .18s ease, box-shadow .18s ease, background .18s ease, filter .18s ease",
    cursor: "pointer",
    paddingInline: "1.6rem",
    outline: "none",
    backdropFilter: "blur(12px)",
    ":hover": {
      background: "var(--button-hover-color)",
      boxShadow: "var(--box-shadow-hover), var(--elevated-glow)",
      transform: "translateY(-2px) scale(1.01)",
      filter: "saturate(1.04)",
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    justifyContent: "center",
    padding: 0,
    overflow: "hidden",
    gap: 0,
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "var(--text-color)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 0,
    opacity: 0.96,
    fontWeight: 700,
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    color: "var(--text-strong)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    margin: 0,
    maxWidth: "100%",
    opacity: 1,
    fontWeight: 700,
    textShadow: "0 1px 0 rgba(255,255,255,.04)",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    color: "transparent",
    margin: 0,
    padding: 0,
    opacity: 0,
    width: 0,
    caretColor: "transparent",
  }),
  indicatorsContainer: () => ({
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    width: "106%",
    left: "-3%",
    marginTop: "1rem",
    background: "var(--block-background-alt)",
    border: "var(--section-border)",
    padding: "0.6rem",
    boxShadow: "var(--box-shadow), var(--elevated-glow)",
    borderRadius: "3rem",
    overflow: "hidden",
    backdropFilter: "blur(18px)",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    padding: "0.2rem",
    maxHeight: "27rem",
  }),
  noOptionsMessage: (baseStyles) => ({
    ...baseStyles,
    color: "var(--text-color)",
    fontSize: "1.4rem",
  }),
  group: (baseStyles) => ({
    ...baseStyles,
    overflow: "visible",
    padding: 0,
  }),
  groupHeading: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    color: "var(--text-muted)",
    fontSize: "1.2rem",
    fontWeight: 700,
    letterSpacing: ".04em",
    textTransform: "uppercase",
    margin: "0.8rem 0 0.4rem",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    width: "100%",
    minHeight: "5rem",
    padding: "0 1.6rem",
    margin: "0.45rem 0",
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: state.isSelected
      ? "var(--button-selected-color)"
      : state.isFocused
        ? "var(--button-hover-color)"
        : "var(--button-background-color)",
    color: state.isDisabled ? "var(--text-muted)" : "var(--text-strong)",
    border: "var(--border)",
    boxShadow: state.isSelected
      ? "var(--inset-shadow), var(--surface-glow)"
      : "var(--box-shadow-soft), var(--surface-glow)",
    transition: "transform .18s ease, box-shadow .18s ease, background .18s ease, opacity .18s ease",
    borderRadius: "999px",
    cursor: state.isDisabled ? "not-allowed" : "pointer",
    opacity: state.isDisabled ? 0.5 : 1,
    ":active": {
      background: "var(--button-active-color)",
      boxShadow: "var(--inset-shadow-strong), var(--surface-glow)",
      transform: "scale(0.99)",
    },
  }),
};

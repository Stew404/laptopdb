import {cloneElement, isValidElement, PropsWithChildren } from "react";

export default function BlockStyle({
    children,
    style = "gray",
    additionalClasses = "",
}: PropsWithChildren<{ style?: "gray" | "blue"; additionalClasses?: string}>) {
    const colorClass =
        style === "gray"
            ? "main-border block-bg"
            : "section-border block-bg-alt";

    if (!isValidElement<{ className?: string }>(children)) {
        return children;
    }

    return cloneElement(children, {
        className: ` ${colorClass} main-shadow ${children.props.className} ${additionalClasses}`,
    });
}
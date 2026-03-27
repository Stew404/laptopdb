import { FC } from "react";

const Field: FC<{
    label: string;
    value: string | number | null;
    className?: string;
}> = ({ label, value, className = "text-[2rem]" }) => {
    return (
        <>
            {value && (
                <p className={`flex justify-between ${className}`}>
                    <span className="font-normal">{label}:</span>
                    {value}
                </p>
            )}
        </>
    );
};

export default Field
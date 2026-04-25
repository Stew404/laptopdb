import { FC } from "react";
const ListGroup : FC<{elements: string[], heading: string}> = ({elements, heading})=>{
    return (
        <>
            {elements.length > 0 && (
                <div>
                    <h3>{heading}</h3>
                    <ul>
                        {elements.map((elem) => {
                            return (
                                <li key={elem} className="font-normal text-[2rem]">
                                    - {elem}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}

export default ListGroup
import { useState } from "react";

function ParentComp() {
    let arr = ["student", "student"];
    return (
        <>
            <ol>
                {
                    arr.map((value) => {
                        return <li>{value}</li>
                    })
                }
            </ol>
        </>
    );
}

export default ParentComp;
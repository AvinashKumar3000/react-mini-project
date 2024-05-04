import { useState } from "react";
const companies = [
    {
        name: "Google",
        industry: "Technology",
        headquarters: "Mountain View, California, USA",
        founded: 1998,
        ceo: "Sundar Pichai",
        revenue: "$181.69 billion USD (2020)",
        employees: "Over 135,000 (2021)"
    },
    {
        name: "Apple Inc.",
        industry: "Technology",
        headquarters: "Cupertino, California, USA",
        founded: 1976,
        ceo: "Tim Cook",
        revenue: "$274.52 billion USD (2020)",
        employees: "Over 147,000 (2021)"
    },
    {
        name: "Amazon",
        industry: "E-commerce, Cloud computing, Artificial Intelligence",
        headquarters: "Seattle, Washington, USA",
        founded: 1994,
        ceo: "Andy Jassy",
        revenue: "$386 billion USD (2020)",
        employees: "Over 1.3 million (2021)"
    },
    {
        name: "Microsoft",
        industry: "Technology",
        headquarters: "Redmond, Washington, USA",
        founded: 1975,
        ceo: "Satya Nadella",
        revenue: "$143 billion USD (2020)",
        employees: "Over 181,000 (2021)"
    },
    {
        name: "Tesla, Inc.",
        industry: "Automotive, Energy, Technology",
        headquarters: "Palo Alto, California, USA",
        founded: 2003,
        ceo: "Elon Musk",
        revenue: "$31.54 billion USD (2020)",
        employees: "Over 70,000 (2021)"
    }
];
function ParentComp() {
    const [index, setIndex] = useState(0);
    function handleClick(idx) {
        setIndex(idx);
    }
    return (
        <>
            <button onClick={() => handleClick(0)}>Google</button>
            <button onClick={() => handleClick(1)}>Apple</button>
            <button onClick={() => handleClick(2)}>Amazon</button>
            <button onClick={() => handleClick(3)}>Microsoft</button>
            <button onClick={() => handleClick(4)}>Tesla</button>

            <fieldset>
                <legend>{companies[index].name}</legend>
                <ol>
                    <li>industry: {companies[index].industry}</li>
                    <li>headquarters: {companies[index].headquarters}</li>
                    <li>founded: {companies[index].founded}</li>
                    <li>ceo: {companies[index].ceo}</li>
                    <li>revenue: {companies[index].revenue}</li>
                    <li>employees: {companies[index].employees}</li>
                </ol>
            </fieldset>
        </>
    );
}

export default ParentComp;
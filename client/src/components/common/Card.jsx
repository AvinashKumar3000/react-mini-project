import { convertDollarToINR } from "../../utils/dollar2Inr";

export default function Card({ data }) {
    return (
        <div className="sub-card">
            <div className="image">
                <img
                    src={data.url}
                    alt="card"
                />
            </div>
            <div className="content">
                <h4>{data.name}</h4>
                <p>{data.brand ? "brand" : "weight"} : {data.brand ? data.brand : data.weight}</p>
                <p>price: {convertDollarToINR(data.price)}</p>
            </div>
        </div>

    );
}

import { useContext, useEffect, useState } from "react";
import { NotificationContext } from "../../context/NotificationContext";
import productApi from "../../services/ProductsApi";
import { convertDollarToINR } from "../../utils/dollar2Inr";

function Card({ obj }) {
    const [data, setData] = useState({});
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        if (Boolean(obj)) {
            productApi.getProductById(obj.category, obj.id)
                .then(response => {
                    setData(response.data[0]);
                })
                .catch(err => {
                    console.error(err);
                    addNotification('something went wrong', true);
                });
        }
    }, [obj, addNotification]);

    return (
        <div className="card">
            <div>
                <h3>{data.name}</h3>
                <p>{data.brand ? "brand" : "weight"} : {data.brand ? data.brand : data.weight}</p>
                <p>price: {convertDollarToINR(data.price)}</p>
            </div>
            <img
                src={data.url}
                alt="card detail"
            />
        </div>
    );
}

function OtherHighLightSection({ items }) {
    return (
        <section className="other-high-lights">
            {
                items.slice(1).map((value, index) => {
                    return <Card obj={value} key={index} />;
                })
            }
        </section>

    );
}

export default OtherHighLightSection;
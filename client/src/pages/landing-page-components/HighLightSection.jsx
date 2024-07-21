import { useContext, useEffect, useState } from "react";
import productApi from "../../services/ProductsApi";
import { NotificationContext } from "../../context/NotificationContext";
import { convertDollarToINR } from "../../utils/dollar2Inr";

function HighLightSection({ content }) {
    const [data, setData] = useState({});
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        if (Boolean(content)) {
            productApi.getProductById(content.category, content.id)
                .then(response => {
                    setData(response.data[0]);
                })
                .catch(err => {
                    console.error(err);
                    addNotification('something went wrong', true);
                });
        }
    }, [content, addNotification]);

    return (
        <section className="high-lights">
            <div className="content">
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.brand ? "brand" : "weight"} : {data.brand ? data.brand : data.weight}</p>
                    <p>price : {convertDollarToINR(data.price)}</p>
                    <button>visit</button>
                </div>
            </div>
            <div className="image">
                <img
                    src={data.url}
                    alt="high-lights-product"
                />
            </div>
        </section>
    );
}

export default HighLightSection;
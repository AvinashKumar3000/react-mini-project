import { useEffect, useState } from "react";
import productApi from "../services/ProductsApi";
import Card from "../components/common/Card";

const styles = {
    subSection: {
        width: '100%'
    },
    group: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }
};

function ViewProductPage({ product }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (product != null) {
            productApi.getProduct(product)
                .then(response => {
                    setItems(response.data);
                })
                .catch(err => {
                    console.error('something went wrong in SubSection', err);
                });
        }
    }, [product]);

    return (
        <div className="sub-section" style={styles.subSection}>
            <hr />
            <h3 style={{ textAlign: "center", textTransform: "uppercase" }}>{product}</h3>
            <div className="group" style={styles.group}>
                {items.map((value, index) => {
                    return <Card data={value} key={index} />;
                })}
            </div>
        </div>
    );
}

export default ViewProductPage;
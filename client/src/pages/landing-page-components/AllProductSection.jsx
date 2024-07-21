import { useEffect, useState } from "react";
import productApi from "../../services/ProductsApi";
import Card from "../../components/common/Card";

const PRODUCTS_LIST = ['mobiles', 'fashion', 'groceries', 'beauty'];

function SubSection({ product }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (product != null) {
            productApi.getProduct(product, true)
                .then(response => {
                    setItems(response.data);
                })
                .catch(err => {
                    console.error('something went wrong in SubSection', err);
                });
        }
    }, [product]);

    return (
        <div className="sub-section">
            <h3>{product}</h3>
            <div className="group">
                {items.slice(0, 4).map((value, index) => {
                    return <Card data={value} key={index} />;
                })}
            </div>
        </div>
    );
}

function AllProductSection() {
    return (
        <section className="all-products">
            <h2>All Products</h2>
            {PRODUCTS_LIST.map((value, index) => {
                return <SubSection product={value} key={index} />;
            })}
        </section>

    );
}

export default AllProductSection;
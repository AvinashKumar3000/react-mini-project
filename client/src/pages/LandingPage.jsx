import { useContext, useEffect, useState } from "react";
import AllProductSection from "./landing-page-components/AllProductSection";
import HighLightSection from "./landing-page-components/HighLightSection";
import OtherHighLightSection from "./landing-page-components/OtherHighLightSection";
import './Landing.css';
import productApi from "../services/ProductsApi";
import { NotificationContext } from "../context/NotificationContext";

export default function LandingPage() {
    const [highlights, setHighlights] = useState([]);
    const { addNotification } = useContext(NotificationContext);

    useEffect(() => {
        // 📒 Here in below code I have used `JS promise` concept.
        productApi.getHights()
            .then(response => {
                setHighlights(response.data);
            }).catch(err => {
                console.error(err);
                addNotification("something went wrong", true)
            });
    }, []);

    return (
        <main>
            <HighLightSection content={highlights[0]} />
            <OtherHighLightSection items={highlights} />
            <AllProductSection />
        </main>
    );
};
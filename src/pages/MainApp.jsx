import { useContext, useEffect, useState } from 'react';
import Header from '../components/header/Header';
import AuthContext from "../context/authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import SwitchMainApp from '../utils/SwitchMainApp';
import Footer from '../components/footer/Footer';

const ICON_MAP = {
    'home': <i className="fa-solid fa-house-chimney"></i>,
    'search': <i className="fa-solid fa-magnifying-glass"></i>,
    'library': <i className="fa-solid fa-bookmark"></i>,
    'profile': <i className="fa-solid fa-user"></i>
};

function MainApp() {
    const [tab, setTab] = useState("home");
    const [history, setHistory] = useState(undefined);
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!authContext.auth) {
            navigate('/');
        }
    }, [authContext.auth, navigate]);

    function handleSetTab(newTab) {
        setHistory(tab);
        setTab(newTab);
    }

    function handleBack() {
        setHistory(undefined);
        if (history !== undefined) {
            setTab(history);
        }
    }

    return (
        <>
            <Header title={tab} icon={ICON_MAP[tab]} handleBack={handleBack} />
            <SwitchMainApp tab={tab} setTab={handleSetTab} />
            <Footer activeTab={tab} setTab={handleSetTab} />
        </>
    )
}

export default MainApp;
import { useContext, useEffect, useState } from 'react';
import SwitchAuthPages from '../utils/SwitchAuthPages';
import Header from '../components/header/Header';
import AuthContext from '../context/authentication/AuthContext';
import { useNavigate } from 'react-router-dom';

const ICON_MAP = {
    'welcome': <i className="fa-solid fa-door-open"></i>,
    'sign-in': <i className="fa-solid fa-user"></i>,
    'sign-up': <i className="fa-solid fa-user"></i>,
    'forget-pass': <i className="fa-solid fa-key"></i>
}

function AuthPage() {
    const [tab, setTab] = useState("welcome");
    const [history, setHistory] = useState(undefined);

    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (authContext.auth) {
            navigate('/app');
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
            <SwitchAuthPages tab={tab} setTab={handleSetTab} setHistory={setHistory} />
        </>
    );
}

export default AuthPage;
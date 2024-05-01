import { useContext, useState } from "react";
import AuthContext from "../context/authentication/AuthContext";

function ForgetPassPage() {
    const authContext = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleProceed() {
        // TODO: backend connection
        if (userName === "admin" && password === "admin" && confirmPassword === "admin") {
            authContext.setAuth(true);
        }
    }
    return (
        <div className="container welcome-page">
            <section className="welcome-section">
                <h2>forget your password page</h2>
                <input
                    onChange={(e) => { setUserName(e.target.value) }}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username" />
                <br />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <br />
                <input
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="confirm-password"
                />
                <br />
                <button onClick={handleProceed}>update</button>
            </section>
        </div>

    );
}

export default ForgetPassPage;
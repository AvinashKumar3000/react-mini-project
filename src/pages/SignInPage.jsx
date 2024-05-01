import { useContext, useState } from "react";
import AuthContext from "../context/authentication/AuthContext";

function SignInPage() {
    const authContext = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function handleProceed() {
        // TODO : check authentication with API
        if (userName === "admin" && password === "admin") {
            authContext.setAuth(true);
        }
    }
    return (
        <div className="container welcome-page">
            <section className="welcome-section">
                <h2>sign-in page</h2>
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
                <button onClick={handleProceed}>proceed</button>
            </section>
        </div>

    );
}

export default SignInPage;
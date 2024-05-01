import { useContext, useState } from "react";
import AuthContext from "../context/authentication/AuthContext";

function SignUpPage() {
    const authContext = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    function handleCreate() {
        // TODO : crate account with API
        if (userName === "admin" && password === "admin") {
            authContext.setAuth(true);
        }
    }
    return (
        <div className="container welcome-page">
            <section className="welcome-section">
                <h2>sign-up page</h2>
                <input
                    onChange={(e) => { setUserName(e.target.value) }}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                />
                <br />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                />
                <br />
                <button onClick={handleCreate}>create</button>
            </section>
        </div>
    );
}

export default SignUpPage;
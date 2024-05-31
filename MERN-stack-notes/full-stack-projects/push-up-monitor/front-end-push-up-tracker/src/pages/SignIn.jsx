import { useState } from "react";

export default function SignIn({ setTab, setAuth, setUserId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit() {
        if (username !== "" && password !== "") {
            // TODO: perform logic
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "username": username,
                "password": password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
            // change this 👇 URL to your back end hosted url. ⚠️ This url will not work for you. ⚠️
            fetch("https://back-end-push-up-tracker.vercel.app/gym/sign-in", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        alert(result.msg);
                        setUserId(result.data._id);
                        setAuth(true);
                        setTab('tracker');
                    } else {
                        alert(result.msg);
                    }
                })
                .catch((error) => console.error(error));

        }
    }
    return (
        <div>
            <h1>sign in page</h1>
            <input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} /><br />
            <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}
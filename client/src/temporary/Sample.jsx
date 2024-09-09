import { useState } from "react";

function InputSample() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <p>username is : {username}</p>
            <p>password is : {password}</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </>
    );
}


function Sample() {
    return (
        <>
            <InputSample></InputSample>
        </>
    );
}

export default Sample;
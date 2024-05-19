
import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function SignInPage({ setPageTab, setUserId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit() {
        if (username === 'admin' && password === 'admin') {
            // Actually this user id will be coming from back-end
            setUserId("1234sdfgbr34");
            setPageTab("todo");
        }
    }
    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br />
            <button onClick={handleSubmit}>submit</button>
            <br />
            <button onClick={() => setPageTab('sign-up')}>go to sign-up page</button>
        </div>
    );
}

function SignUpPage({ setPageTab, setUserId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit() {
        if (password === confirmPassword) {
            // allow only if password and confirmPassword is same.
            // then perform back-end operation and get userId.
            setUserId("1234sdfgbr34");
            setPageTab("todo");
        }
    }
    return (
        <div>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <br />
            <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <br />
            <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
            <br />
            <button onClick={handleSubmit}>submit</button>
            <br />
            <button onClick={() => setPageTab('sign-in')}>go to sign-in page</button>
        </div>
    );
}

function WelcomePage({ setPageTab }) {
    return (
        <div>
            <button onClick={() => setPageTab("sign-in")}>sign-in</button>
            <button onClick={() => setPageTab("sign-up")}>sign-up</button>
        </div>
    );
}

function App() {
    const [pageTab, setPageTab] = useState("");
    const [userId, setUserId] = useState("");

    switch (pageTab) {
        case "sign-in":
            return <SignInPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "sign-up":
            return <SignUpPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "todo":
            return <ToDoList setPageTab={setPageTab} userId={userId} />;
        default:
            return <WelcomePage setPageTab={setPageTab} />;
    }
}

export default App;

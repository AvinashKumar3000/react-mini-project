import { useContext, useState } from "react";
import { NotificationContext } from '../context/NotificationContext';

import './UserProfile.css';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
/**
 * 
 * Separate State Variables: Each input field has its own state variable managed with useState.
 * Input Fields: Each input field updates its corresponding state variable using an onChange handler.
 * handleSubmit Function: This function gathers all the state variables into a single userData object and logs it (you can replace the console.log with any other logic, such as sending the data to a server).
 * Form Submission: The form uses a submit button, and the handleSubmit function is called when the form is submitted.
 */
export default function LandingPage() {
    const { addNotification } = useContext(NotificationContext)
    // This is another example we can use as an object
    // instead of destructuring as shown in above context
    const authContext = useContext(AuthContext);

    const [username, setUsername] = useState('hattori');
    const [profileName, setProfileName] = useState('ninja_hatori');
    const [profileImgUrl, setProfileImgUrl] = useState('https://i.pinimg.com/474x/bc/f0/27/bcf0272b061414169e8d2e21659223c7.jpg');
    const [profileStatus, setProfileStatus] = useState('sleeping');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Here this preventDefault is used to 
        // make sure, the submit action won't do any
        // other default actions. like going to other pages.
        e.preventDefault();

        const userData = {
            username,
            lastActive: new Date().toString(),
            profile: {
                name: profileName,
                imgUrl: profileImgUrl,
                status: profileStatus
            },
            playlist: {
                count: 0,
                favorite: {
                    count: 0
                }
            }
        };
        console.log('User Data:', userData);
        addNotification('user created successfully');
        // authentication success full
        authContext.setStatus(true);
        authContext.setUserDetail(userData);
        navigate('/app');
    };

    return (
        <div className="form-container">
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <h3>Profile</h3>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                    />
                    <br />
                    <label>Image URL:</label>
                    <input
                        type="text"
                        value={profileImgUrl}
                        onChange={(e) => setProfileImgUrl(e.target.value)}
                    />
                    <br />
                    <label>Status:</label>
                    <input
                        type="text"
                        value={profileStatus}
                        onChange={(e) => setProfileStatus(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <pre>{JSON.stringify({
                username,
                profile: {
                    name: profileName,
                    imgUrl: profileImgUrl,
                    status: profileStatus
                }
            }, null, 2)}</pre>
        </div>
    );
};
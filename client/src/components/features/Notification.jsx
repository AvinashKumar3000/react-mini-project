import { useEffect } from 'react';
import './Notification.css';

const customStyle = {
    error: {
        color: "red"
    },
    good: {
        color: "green"
    }
};

const NotifyBar = function ({ value, onClose }) {

    useEffect(() => {
        // executed once component is created
        const timeout = setTimeout(() => {
            onClose(value.id);
        }, 2000); // after 2s = 2000 milliseconds

        return () => {
            clearTimeout(timeout);
            console.log("removing notification: ", value.msg);
        }
    }, [onClose, value]);

    return (
        <div
            className="notify-bar"
            style={value.error ? customStyle.error : customStyle.good}
        >
            🔔 {value.msg}
            <div className="close" onClick={() => onClose(value.id)}>
                x
            </div>
        </div>
    );
}

export default function Notification({ items, closeNotification }) {
    return (
        <div className="notification-container">
            {
                items?.map((value, index) => {
                    return <NotifyBar key={index} value={value} onClose={closeNotification} />;
                })
            }
        </div>
    );
}
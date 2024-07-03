import { createContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incr, remove } from "../redux/slices/notificationSlice";

import Notification from "../components/features/Notification";

const NotificationContext = createContext();

function NotificationProvider({ children }) {
    const notification = useSelector(state => state.notification);
    const dispatch = useDispatch();

    function closeNotification(id) {
        dispatch(remove(id));
    }

    function addNotification(msg, error = false) {
        let payload = { msg, error };
        dispatch(incr(payload));
    }

    return (
        <>
            {notification.count > 0 ? <Notification items={notification.items} closeNotification={closeNotification} /> : undefined}
            <NotificationContext.Provider value={{ addNotification }}>
                {children}
            </NotificationContext.Provider>
        </>
    );
}

export { NotificationContext, NotificationProvider };
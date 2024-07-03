import { createContext, useEffect, useState } from "react";

// CONSTANTS
const DEFAULT_USER_DETAIL = {
    username: 'default',
    lastActive: new Date().toString(),
    profile: {
        name: 'default',
        imgUrl: 'default',
        status: 'default'
    },
    playlist: {
        count: 0,
        favorite: {
            count: 0
        }
    }
}


const AuthContext = createContext();

function AuthProvider({ children }) {
    /**
     * status: true, user logged in
     * status: false, user logged out
     */
    const [status, setStatus] = useState(false);
    const [userDetail, setUserDetail] = useState(DEFAULT_USER_DETAIL);

    useEffect(() => {
        if (!status) {
            // reset data
            setUserDetail(DEFAULT_USER_DETAIL); 
        }
    }, [status]);

    return (
        // Here in below case, we are sending data in object form, which will store in obj form.
        // JS reference is given below. 
        /**
         * We can pass data in array also. 
         * But send data in object format is preferable.
         */
        // 🏷️ Data which is passed to `value` will be shared to children components. 
        <AuthContext.Provider value={{ status, setStatus, userDetail, setUserDetail }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };

/**
 * JAVASCRIPT REFERENCE
 * let a = 10;
 * let b = 20;
 * let c = 30;
 * let obj = {a,b,c};
 * 
 * // here in above example
 * // data will stored as below.
 * // obj = { a: 10, b: 20, c: 30 }; 
 */
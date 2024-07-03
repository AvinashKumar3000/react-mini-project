import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

/**
 *   where ever I am using this custom hook it will make sure, only if authentication is true,
 * then application is accessible.
 */
export default function useAuthValidator() {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        // executed on creation of component
        if (!authContext.status) {
            navigate('/');
        }
    }, [authContext.status]);
}
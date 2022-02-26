import React, {createContext, useEffect, useState} from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const navigate = useNavigate();
    const [userAuth, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const recoveredUser = localStorage.getItem("user2")

        if(recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

        setLoading(false);
    }, []);

    const login = (user, password) => {
        console.log('login auth', {user, password});

        const loggedUser = {
            id: "1234",
            user,
        };

        localStorage.setItem("user2", JSON.stringify(loggedUser));

        if (password && user !== "undefined") {
            setUser({user});
            navigate("/enter");
        }
    };

    const logout = () => {
        console.log("logout");
        localStorage.removeItem("user2")
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!userAuth, userAuth, setLoading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
};
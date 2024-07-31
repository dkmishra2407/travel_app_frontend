import { createContext, useContext, useReducer } from "react";
import authReducer from "../reducer/auth-reducer"; // Ensure the import matches the updated reducer name

const initialValue = {
    name: "",
    email: "",
    mobileNo: "", // Use camelCase for consistency
    password: "",
    openLoginSignup: false,
    selectedtab: "login", // Use camelCase for consistency
    isclosetap: true
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
    const [state, authDispatch] = useReducer(authReducer, initialValue);

    return (
        <AuthContext.Provider value={{ ...state, authDispatch }}>
            {children}   
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
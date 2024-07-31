import { Login, SignUp } from "../index";
import { useAuth } from "../../context";
import "./authmodal.css";

export const AuthModal = () => {
    const { isclosetap, selectedtab, authDispatch } = useAuth();

    const handleLoginClick = () => {
        authDispatch({ type: "OPEN_LOG_IN" });
    };

    const handleSignUpClick = () => {
        authDispatch({ type: "OPEN_SIGN_UP" });
    };

    const handleCloseTap = () => {
        authDispatch({ type: "CLOSE_AUTH_MODAL" }); // Corrected action type
    };

    // Render the modal only if isclosetap is true
    return (
        isclosetap && (
            <div className="Auth-Modal-Container d-flex cursor-pointer">
                <div className="Login-signup gap">
                    <button className="Auth-Modal-Container-login" onClick={handleLoginClick}>
                        Log In
                    </button>
                    <button className="Auth-Modal-Container-sign-up" onClick={handleSignUpClick}>
                        Sign Up
                    </button>
                    <span className="material-symbols-outlined" onClick={handleCloseTap}>
                        close
                    </span>
                </div>
                <div className="show-container">
                    {selectedtab === "login" ? <Login /> : <SignUp />}
                </div>
            </div>
        )
    );
};
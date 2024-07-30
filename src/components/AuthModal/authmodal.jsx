import { Login , SignUp } from "../index"

export const AuthModal = () => {
    return(
        <div className="Auth-Modal-Container d-flex cursor-pointer">
            <button className="Auth-Modal-Container-login">Log In</button>
            <button className="Auth-Modal-Container-dign-up">Sign Up</button>
            <span class="material-symbols-outlined">close</span>
        </div>
    )
}
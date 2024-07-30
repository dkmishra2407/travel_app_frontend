
export const Login = () =>{
    return(
        <div className="auth-container d-flex">
            <div className="d-flex align-center ls-container">
                <label className="auth-label">Mobile Number <span className="astric">*</span></label>
                <input type="number" maxLength={10} placeholder="Mobile Number" />
            </div>
            <div className="d-flex align-center cursor-pointer ls-container">
                <label className="auth-label">Password<span className="astric" >*</span></label>
                <input type="password"  placeholder="Password" />
            </div>
            <div className="submit-btn">
                Log In
            </div>

            <div className="login-credential">
                Login With Your Credential
            </div>
        </div>
    )
}
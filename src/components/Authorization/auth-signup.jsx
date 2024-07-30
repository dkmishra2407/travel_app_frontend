
export const SignUp = () => {
    return(
        <div className="auth-container"> 
            <div className="d-flex align-center ls-container">
                <label className="auth-label">Mobile Number <span className="astric">*</span></label>
                <input type="number" maxLength={10} placeholder="Mobile Number" required/>
            </div>
            <div className="d-flex align-center cursor-pointer ls-container">
                <label className="auth-label">Name<span className="astric" >*</span></label>
                <input type="text"  placeholder="Name" required/>
            </div>

            <div className="d-flex align-center cursor-pointer ls-container">
                <label className="auth-label">email<span className="astric" >*</span></label>
                <input type="email"  placeholder="email" required/>
            </div>

            <div className="d-flex align-center cursor-pointer ls-container">
                <label className="auth-label">Password<span className="astric" >*</span></label>
                <input type="password"  placeholder="Password" required/>
            </div>

            <div className="d-flex align-center cursor-pointer ls-container">
                <label className="auth-label">Confirm Password<span className="astric" >*</span></label>
                <input type="password"  placeholder="Password" required/>
            </div>
            <div className="submit-btn">
                Sign Up
            </div>
        </div>
    )
}

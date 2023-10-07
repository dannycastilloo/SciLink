import { NavLink } from "react-router-dom"

export const ForgotForm = () => {
    return (
        <form className="login-form" action="">
            <h1 className="login-title">Recover your password</h1>

            <div className="form-input">
                <i className="fas fa-solid fa-user"></i>
                <label>Username</label>
            </div>
            <input type="text" id="username" />

            <button className="login-action">Send verification code</button>

            <NavLink to='/register' className="link">New user?</NavLink>
        </form>
    )
}

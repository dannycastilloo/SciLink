import { NavLink } from "react-router-dom"

export const LoginForm = () => {
    return (
        <>
            <form className="login-form" action="">
                <h1 className="login-title">Login</h1>

                <div className="form-input">
                    <i className="fas fa-solid fa-user"></i>
                    <label>Username</label>
                </div>
                <input type="text" id="username" />

                <div className="form-input">
                    <i className="fas fa-solid fa-lock"></i>
                    <label>Password</label>
                </div>
                <input type="password" id="password" />

                <NavLink to='/forgot' className="link">Forgot your password?</NavLink>

                <NavLink to='/register' className="link">New user?</NavLink>

                <button className="login-action" id="button">Login</button>
            </form>
        </>
    )
}

import { NavLink } from "react-router-dom"

export const RegisterForm = () => {
    return (
        <>
            <form className="login-form" action="">
                <h1 className="login-title">Register</h1>

                <div className="form-input">
                    <i className="fas fa-solid fa-user"></i>
                    <label>Create a username</label>
                </div>
                <input type="text" id="username" />

                <div className="form-input">
                    <i className="fas fa-solid fa-lock"></i>
                    <label>Create a password</label>
                </div>
                <input type="password" id="password" />

                <NavLink to='/login' className="link">Already have an account?</NavLink>

                <button className="login-action" id="button">Create an account</button>
            </form>
        </>
    )
}

export const RegisterForm = () => {
    return (
        <>
            <form className="login-form" action="">
                <h1 class="login-title">Register</h1>

                <div className="form-input">
                    <i class="fas fa-solid fa-user"></i>
                    <label>Create a username</label>
                </div>
                <input type="text" id="username" />

                <div className="form-input">
                    <i class="fas fa-solid fa-lock"></i>
                    <label>Create a password</label>
                </div>
                <input type="password" id="password" />

                <a href="./forgot.html" class="link">Already have an account?</a>

                <button className="login-action" id="button">Create an account</button>
            </form>
        </>
    )
}

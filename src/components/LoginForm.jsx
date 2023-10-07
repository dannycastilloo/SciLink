

export const LoginForm = () => {
    return (
        <>
            <form className="login-form" action="">
                <h1 class="login-title">Login</h1>

                <div className="form-input">
                    <i class="fas fa-solid fa-user"></i>
                    <label>Username</label>
                </div>
                <input type="text" id="username" />

                <div className="form-input">
                    <i class="fas fa-solid fa-lock"></i>
                    <label>Password</label>
                </div>
                <input type="password" id="password" />

                <a href="./forgot.html" class="link">Forgot your password?</a>
                <a href="./register.html" class="link">New user?</a>

                <button className="login-action" id="button">Login</button>
            </form>
        </>
    )
}

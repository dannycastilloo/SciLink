import { NavLink } from "react-router-dom"

export const RegisterForm = () => {
    return (
        <>
            <div class="login-container">
                <form class="login-form" action="">
                    <h1 class="login-title">Crea una nueva cuenta</h1>

                    <div class="form-input">
                        <i class="fas fa-solid fa-user"></i>
                        <label>Nombres</label>
                    </div>
                    <input type="text" id="username" />

                    <div class="form-input">
                        <i class="fas fa-solid fa-phone"></i>
                        <label>Celular</label>
                    </div>
                    <input type="phone" id="phone" />

                    <div class="form-input">
                        <i class="fas fa-solid fa-inbox"></i>
                        <label>Correo electrónico</label>
                    </div>
                    <input type="email" id="email" />

                    <div class="form-input">
                        <i class="fas fa-solid fa-lock"></i>
                        <label>Contraseña</label>
                    </div>
                    <input type="password" id="password" placeholder="●●●●●●●●●" />

                    <a href='login.html' class="link">¿Ya tienes una cuenta?</a>

                    <button class="login-action" id="button">Regístrate</button>
                </form>
            </div>
        </>
    )
}

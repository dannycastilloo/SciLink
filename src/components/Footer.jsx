import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="div-center">
                    <ul className="list-footer">
                        <li><h1 className="title-footer">Página</h1></li>
                        <li><NavLink to='/' className="foot-link">Inicio</NavLink></li>
                        <li><NavLink to='/login' className="foot-link">Inicia Sesión</NavLink></li>
                        <li><NavLink to='/register' className="foot-link">Regístrate</NavLink></li>
                    </ul>
                    <ul className="list-footer">
                        <li><h1 className="title-footer">Líder y Admin</h1></li>
                        <li><NavLink to='/' className="foot-link">Isis Vera</NavLink></li>
                        <li><NavLink to='/' className="foot-link">Giovani Choquecota</NavLink></li>
                    </ul>
                    <ul className="list-footer">
                        <li><h1 className="title-footer">FrontEnd</h1></li>
                        <li><NavLink to='/' className="foot-link">Dylan Astete</NavLink></li>
                        <li><NavLink to='/' className="foot-link">Danny Castillo</NavLink></li>
                    </ul>
                    <ul className="list-footer">
                        <li><h1 className="title-footer">Backend</h1></li>
                        <li><NavLink to='/' className="foot-link">Elar López</NavLink></li>
                        <li><NavLink to='/' className="foot-link">Ruben Carvajal</NavLink></li>
                    </ul>

                    <div className="vl"></div>

                    <ul className="list-footer">
                        <h1 className="logo title-footer">Sci<span>Link.</span></h1>
                        <p className="foot-link">Conectando Mentes Brillantes en Ciencia y Tecnología</p>
                        <li className="social-container">
                            <img className="social" src="../src/assets/Facebook.svg" alt="Facebook" />
                            <img className="social" src="../src/assets/Instagram.svg" alt="Instagram" />
                            <img className="social" src="../src/assets/Linkedin.svg" alt="Linkedin" />
                        </li>
                        <li><p className="foot-link">Copyright © SciLink 2023</p></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

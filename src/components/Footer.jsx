import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="div-center">
                    <ul className="list-footer">
                        <li>
                            <h1 className="title-footer">Página</h1>
                        </li>
                        <li>
                            <NavLink to='/' className="foot-link">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login' className="foot-link">Inicia Sesión</NavLink>
                        </li>
                        <li>
                            <NavLink to='/register' className="foot-link">Regístrate</NavLink>
                        </li>
                        <li>
                            <NavLink to='/info' className="foot-link">Información</NavLink>
                        </li>
                    </ul>
                    <ul className="list-footer">
                        <li>
                            <h1 className="title-footer">Líder y Admin</h1>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/isisverasolsol/' className="foot-link">Isis Vera</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/giovani-choquecota/' className="foot-link">Giovani Choquecota</a>
                        </li>
                    </ul>
                    <ul className="list-footer">
                        <li>
                            <h1 className="title-footer">FrontEnd</h1>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/dylan-alberto-chilet-astete/' className="foot-link">Dylan Astete</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/dannycastilloo' className="foot-link">Danny Castillo</a>
                        </li>
                    </ul>
                    <ul className="list-footer">
                        <li>
                            <h1 className="title-footer">Backend</h1>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/elar-lopez/' className="foot-link">Elar López</a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/ruben3185-8a70ba36/' className="foot-link">Ruben Carvajal</a>
                        </li>
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
                        <li>
                            <p className="foot-link">Copyright © SciLink 2023</p>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

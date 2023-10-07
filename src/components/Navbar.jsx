import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <div className="menu-bar">
                <NavLink to='/home'><h1 className="logo">Sci<span>Link.</span></h1></NavLink>
                <input type="text" placeholder="Buscar..." />
                <ul>
                    <li><NavLink to='/home'>Inicio</NavLink></li>

                    <li>
                        <a href="#">Idioma<i className="fas fa-caret-down"></i></a>
                        <ul className="dropdown">
                            <li><a href="#">Inglés</a></li>
                            <li><a href="#">Español</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#">Usuario<i className="fas fa-caret-down"></i></a>
                        <ul className="dropdown">
                            <li><NavLink to='/login' className="foot-link">Ingresar</NavLink></li>
                            <li><NavLink to='/register' className="foot-link">Regístrate</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

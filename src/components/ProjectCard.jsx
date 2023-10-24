import { NavLink } from 'react-router-dom'
export const ProjectCard = ({ src, title}) => {
    return (
        <>
            <div className="card-project">
                <img className="card-photo" src={ src } alt="Project image" />
                <p className="card-title">{ title }</p>
                <NavLink to='/info' className="btn-filled-blue">Ver detalles</NavLink>
            </div>
        </>
    )
}

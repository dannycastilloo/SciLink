export const ProjectCard = ({ src, title}) => {
    return (
        <>
            <div className="card-project">
                <img className="card-photo" src={ src } alt="Project image" />
                <p className="card-title">{ title }</p>
                <button className="btn-filled-blue">Ver detalles</button>
            </div>
        </>
    )
}

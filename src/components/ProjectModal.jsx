export const ProjectModal = ({ closeModal }) => {
    return (
        <>
            <div className="project-modal">
                <h1>Agrega un nuevo proyecto</h1>

                <label>Nombre</label>
                <input className="project-name" type="text" id="nombre" name="nombre" placeholder="John Doe" />

                <label>Imagen</label>
                <div className="project-img">
                    <img className="img-prev" src="../src/assets/photo.jpg" alt="Imagen del proyecto" />
                </div>
                <input className="project-file" type="file" />

                <label>Descripción</label>
                <textarea className="project-description" placeholder="Escribe una breve descripción" />

                <div className="project-flex">
                    <div>
                        <label>Fecha del proyecto</label>
                        <br />
                        <input className="project-date" type="date" id="date" />
                    </div>

                    <div>
                        <label>Categoría</label>
                        <br />
                        <select className="project-category" name="fecha" id="fecha">
                            <option value="">Seleccione una categoría</option>
                            <option value="">Web</option>
                            <option value="">Ciencia</option>
                            <option value="">Hardware</option>
                            <option value="">Análisis</option>
                        </select>
                    </div>

                </div>


                <label>Enlace</label>
                <input className="project-url" type="url" name="link" id="link" placeholder="https://www.example.com" />

                <button className="button-project" onClick={closeModal}>Publica tu proyecto</button>
            </div>
        </>
    )
}

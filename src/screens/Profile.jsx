export const Profile = () => {
    return (
        <>
            <header className="py-5 bg-image-full"
                style={{ backgroundImage: "url('https://source.unsplash.com/wfh8dDlNFOk/1600x900')" }}>
                <div className="text-center my-5">
                    <img className="img-fluid rounded-circle mb-4" src="https://dummyimage.com/150x150/6c757d/dee2e6.jpg"
                        alt="..." />
                    <h1 className="text-white fs-3 fw-bolder">Usuario</h1>
                    <p className="text-white-50 mb-0">0101010</p>
                </div>
            </header>

            <section className="datos-personales">
                <form className="datos-usuario" action="">
                    <p style={{fontSize: "24px", textAlign: "center"}}>Tus datos personales</p>

                    <div className="form-input">
                        <label>Nombres</label>
                    </div>
                    <input type="text" id="name" placeholder="John Doe" />

                    <div className="form-input">
                        <label>Celular</label>
                    </div>
                    <input type="text" id="phone" placeholder="938482731" />

                    <div className="form-input">
                        <label>Correo electrónico</label>
                    </div>
                    <input type="text" id="email" placeholder="example@mail.com" />

                    <div className="form-input">
                        <label>Contraseña</label>
                    </div>
                    <input type="password" id="password" placeholder="j2!qsi!@a" />

                    <button className="save-data" id="button">Guardar Cambios</button>
                </form>
            </section>

            <div className="projects-container">
                <div className="card-project">
                    <img className="card-photo" src="../img/photo.jpg" alt="Project image" />
                    <p className="card-title">Nombre del proyecto</p>
                    <a href="project.html" className="btn-filled-blue">Ver detalles</a>
                </div>
                <div className="card-project">
                    <img className="card-photo" src="../img/photo.jpg" alt="Project image" />
                    <p className="card-title">Nombre del proyecto</p>
                    <a href="project.html" className="btn-filled-blue">Ver detalles</a>
                </div>
                <div className="card-project">
                    <img className="card-photo" src="../img/photo.jpg" alt="Project image" />
                    <p className="card-title">Nombre del proyecto</p>
                    <a href="project.html" className="btn-filled-blue">Ver detalles</a>
                </div>
                <div className="card-project">
                    <img className="card-photo" src="../img/photo.jpg" alt="Project image" />
                    <p className="card-title">Nombre del proyecto</p>
                    <a href="project.html" className="btn-filled-blue">Ver detalles</a>
                </div>
                <div className="card-project">
                    <img className="card-photo" src="../img/photo.jpg" alt="Project image" />
                    <p className="card-title">Nombre del proyecto</p>
                    <a href="project.html" className="btn-filled-blue">Ver detalles</a>
                </div>
                <div className="card-project">
                    <img className="card-photo" src="../img/photo.jpg" alt="Project image" />
                    <p className="card-title">Nombre del proyecto</p>
                    <a href="project.html" className="btn-filled-blue">Ver detalles</a>
                </div>
            </div>
        </>
    )
}

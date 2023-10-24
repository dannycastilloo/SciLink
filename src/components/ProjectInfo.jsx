import { Member } from "./Member"

export const ProjectInfo = () => {
    return (
        <>
            <div className="info-container">
                <ul className="nav nav-underline nav-fill">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => mostrarContenido('tab1')}>Detalles</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => mostrarContenido('tab2')}>Proyecto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={() => mostrarContenido('tab3')}>Integrantes</a>
                    </li>
                </ul>
            </div>

            <div className="info-container">
                <div className="tab-content" id="tab1-content">
                    <p className="project-title1">ABOUT THE TEAM</p>
                    <p className="project-desc">Interested in creating an open science and open source project, to match project creators with interested collaborators who have the necessary skills to contribute, find each other and communicate.</p>
                    <p className="project-title2">ABOUT THE CHALLENGE</p>
                    <p className="project-desc">There are many different open science and open-source projects and tools, but no efficient way to match project creators with interested collaborators who possess the skills required to contribute. Your challenge is to create a solution that will help people who are looking for open-source projects to work on and project creators who need skilled contributors to find each other and communicate.</p>
                </div>

                <div className="tab-content" id="tab2-content" style={{display: 'none'}}>
                    <p className="project-title1">PROJECT SCILINK</p>
                    <p className="project-title2">HIGH-LEVEL SUMMARY</p>
                    <p className="project-desc">N/A</p>
                    <p className="project-title2">PROJECT DEMO</p>
                    <p className="project-desc">N/A</p>
                    <p className="project-title2">FINAL PROJECT</p>
                    <p className="project-desc">N/A</p>
                    <p className="project-title2">PROJECT DETAILS</p>
                    <p className="project-desc">N/A</p>
                    <p className="project-title2">USE OF ARTIFICIAL INTELLIGENCE</p>
                    <p className="project-desc">N/A</p>
                    <p className="project-title2">SPACE AGENCY DATA</p>
                    <p className="project-title2">N/A</p>
                    <p className="project-desc">REFERENCES</p>
                    <p className="project-title2">N/A</p>
                </div>

                <div className="tab-content" id="tab3-content" style={{display: 'none'}}>
                    <div className="integrantes-container">
                        <Member src='../src/assets/isis.jpg' name='Isis Shantal Vera Solsol' username='@isisverasolsol' country='Perú'></Member>

                        <Member src='../src/assets/giovani.jpg' name='Giovani Jordy Choquecota Hernani' username='@giodeveloper' country='Perú'></Member>

                        <Member src='../src/assets/dylan.png' name='Dylan Alberto Chilet Astete' username='@mr-wolf' country='Perú'></Member>

                        <Member src='../src/assets/danny.jpg' name='Danny Adrian Castillo Otiniano' username='@dannycastillo' country='Perú'></Member>

                        <Member src='../src/assets/ruben.png' name='Ruben Carvajal' username='@ruben3185' country='Colombia'></Member>

                        <Member src='../src/assets/elar.jpg' name='Elar López Cortez' username='@elar10' country='Perú'></Member>
                    </div>
                </div>
            </div>
        </>
    )
}

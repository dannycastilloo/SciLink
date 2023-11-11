import { Member } from "../components/Member"

export const Home = () => {
  return (
    <>
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">Be part of a great universe of knowledge</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p>Connecting brilliant minds in science and technology</p>
              <a className="btn btn-primary find-out" href="https://scilink.space/invite">Find Out More</a>
            </div>
          </div>
        </div>
      </header>

      <div className="organizations-container">
        <img className="org-img" src="../src/assets/org/nasa.jpg" alt="NASA" />
        <img className="org-img" src="../src/assets/org/noaa.jpg" alt="NOAA" />
        <img className="org-img" src="../src/assets/org/nsf.png" alt="NSF" />
        <img className="org-img" src="../src/assets/org/usfs.png" alt="UFSF" />
        <img className="org-img" src="../src/assets/org/usfws.png" alt="USFWS" />
      </div>

      <div className="about-project" id="about">
        <p className="about-desc">The distinctive thing about this marketplace lies in its ability to encourage interaction between users and projects. Communication and collaboration tools will be included, such as discussion forums and comment spaces, where participants can share ideas, ask questions and establish potential collaborations.</p>
        <img className="about-img" src="src/assets/logo.png" alt="Imagen empresa" />
      </div>

      <h2>Meet our Team</h2>
      <div className="div-center" id="equipo">
        <div className="integrantes-container">
          <Member src='../src/assets/team/isis.jpg' name='Isis Shantal Vera Solsol' username='@isisverasolsol' country='Perú'></Member>

          <Member src='../src/assets/team/giovani.jpg' name='Giovani Jordy Choquecota Hernani' username='@giodeveloper' country='Perú'></Member>

          <Member src='../src/assets/team/dylan.png' name='Dylan Alberto Chilet Astete' username='@mr-wolf' country='Perú'></Member>

          <Member src='../src/assets/team/danny.jpg' name='Danny Adrian Castillo Otiniano' username='@dannycastillo' country='Perú'></Member>

          <Member src='../src/assets/team/ruben.png' name='Ruben Carvajal' username='@ruben3185' country='Colombia'></Member>

          <Member src='../src/assets/team/elar.jpg' name='Elar López Cortez' username='@elar10' country='Perú'></Member>
        </div>
      </div>
    </>
  )
}

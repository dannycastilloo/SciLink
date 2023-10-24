import { ProjectCard } from "./ProjectCard"

export const ProjectContainer = () => {
    return (
        <>
            <div className="projects-container">
                <ProjectCard src='../src/assets/project1.jpg' title="Proyecto 1"></ProjectCard>
                <ProjectCard
                    src="../src/assets/project2.jpg"
                    title="Proyecto 2"
                />
                <ProjectCard
                    src="../src/assets/project3.jpg"
                    title="Proyecto 3"
                />
                <ProjectCard
                    src="../src/assets/project4.jpg"
                    title="Proyecto 4"
                />
                <ProjectCard
                    src="../src/assets/project5.jpg"
                    title="Proyecto 5"
                />
                <ProjectCard
                    src="../src/assets/project6.jpg"
                    title="Proyecto 6"
                />
            </div>
        </>
    )
}

import { StyledProjectList } from "./style";
import { ProjectListItem } from "./listItem";
import { ProjectsData } from "../../data";

export const ProjectList = () => {

    return (
        <StyledProjectList>
            {ProjectsData.map(project => (
                <ProjectListItem
                    key={project.id}
                    id={project.id}
                    titulo={project.titulo}
                    linguagens={project.linguagens}
                    descricao={project.descricao}
                    github={project.github}
                    link={project.link}
                />
            ))}
        </StyledProjectList>
    )

}
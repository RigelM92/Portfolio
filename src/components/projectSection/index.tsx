import { StyledProjectSection } from "./style"
import { ProjectList } from "../list"

export const ProjectSection = () => {

    return (
        <StyledProjectSection>
            <div className="titleContainer">
                <h3>Meus projetos</h3>
                <p>Projetos criados na <span>Kenzie Academy</span></p>
            </div>
            <div>
                <ProjectList/>
            </div>
        </StyledProjectSection>
    )


}
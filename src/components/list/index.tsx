import { StyledProjectList } from "./style";
import { StyledListItem } from "./listItem/style";

export const ProjectList = () => {

    return (
        <StyledProjectList>
            <StyledListItem>
                <h3>Quickstart</h3>
                <div className="languageContainer">
                    <p>Linguagens:</p>
                    <span>Javascript</span>
                </div>
                <p>
                    Descrição do projeto contendo as informações sobre finalidade
                    da aplicação e como está organizado o repositório...
                </p>
                <div className="iconsContainer">
                    <p>Githubcode</p>
                    <p>Aplicação</p>
                </div>
            </StyledListItem>
            <StyledListItem>
                <h3>Quickstart</h3>
                <div>
                    <span>Linguagens:</span>
                    <span>Javascript</span>
                </div>
                <p>
                    Descrição do projeto contendo as informações sobre finalidade
                    da aplicação e como está organizado o repositório...
                </p>
                <div className="iconsContainer">
                    <p>Githubcode</p>
                    <p>Aplicação</p>
                </div>
            </StyledListItem>
            <StyledListItem>
                <h3>Quickstart</h3>
                <div className="languageContainer">
                    <span>Linguagens:</span>
                    <span>Javascript</span>
                </div>
                <p>
                    Descrição do projeto contendo as informações sobre finalidade
                    da aplicação e como está organizado o repositório...
                </p>
                <div className="iconsContainer">
                    <p>Githubcode</p>
                    <p>Aplicação</p>
                </div>
            </StyledListItem>
            <StyledListItem>
                <h3>Quickstart</h3>
                <div>
                    <span>Linguagens:</span>
                    <span>Javascript</span>
                </div>
                <p>
                    Descrição do projeto contendo as informações sobre finalidade
                    da aplicação e como está organizado o repositório...
                </p>
                <div className="iconsContainer">
                    <p>Githubcode</p>
                    <p>Aplicação</p>
                </div>
            </StyledListItem>
        </StyledProjectList>
    )

}
import { StyledListItem } from "./style";
import githubIcon from "../../../assets/github_icon2.svg"
import shareIcon from "../../../assets/share_icon.svg"

interface IProjectItem {
    id: number,
    titulo: string,
    linguagens: string,
    descricao: string,
    github: string,
    link: string;
}

export const ProjectListItem: React.FC<IProjectItem> = ({ id, titulo, linguagens, descricao, github, link }) => {

    return (
        <StyledListItem>
            <h3>{titulo}</h3>
            <div className="languageContainer">
                <p>Linguagens:</p>
                <span>{linguagens}</span>
            </div>
            <p>
                {descricao}
            </p>
            <div className="iconsContainer">
                <img src={githubIcon}/>
                <a href={github} target="_blank" rel="noopener noreferrer">Github Code</a>
                <img src={shareIcon}/>
                <a href={link} target="_blank" rel="noopener noreferrer">Aplicação</a>
            </div>
        </StyledListItem>
    )

}
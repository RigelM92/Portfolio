import { StyledAboutSection } from "./style";
import github from "../../assets/github_icon.svg"
import html from "../../assets/html_icon.svg"
import css from "../../assets/css_icon.png"
import javascript from "../../assets/javascript_icon.png"
import node from "../../assets/node_icon.png"
import react from "../../assets/react_icon.svg"

export const AboutSection = () => {

    return (
        <StyledAboutSection>
            <div className="nameContainer">
                <p>IMG</p>
                <p>Olá, meu nome é Rigel</p>
            </div>
            <div className="titleContainer">
                <h1>
                    Acompanhe minha <span>jornada</span> de criação e desenvolvimento de <span>projetos</span>
                </h1>
            </div>
            <div className="textContainer">
                <p>
                    Descubra aqui todos meus projetos, as tecnologias utilizadas nos mesmos e como entrar em contato
                </p>
            </div>
            <div className="buttonsContainer">
                <button className="projects">PROJETOS</button>
                <button className="github"><img src={github} alt="github"/></button>
            </div>
            <div className="iconsWrapper">
                <div className="iconsContainer">
                    <img src={html} alt="html"/>
                    <img src={css} alt="css"/>
                    <img src={javascript} alt="javascript"/>
                    <img src={node} alt="node"/>
                    <img src={react} alt="react"/>
                </div>
            </div>
        </StyledAboutSection>
    )

}
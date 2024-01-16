import { StyledAboutSection } from "./style";
import { Link } from "react-router-dom"
import github from "../../assets/github_icon.svg"
import html from "../../assets/html_icon.svg"
import css from "../../assets/css_icon.png"
import javascript from "../../assets/javascript_icon.png"
import node from "../../assets/node_icon.png"
import react from "../../assets/react_icon.svg"
import project1 from "../../assets/HomePageCart.svg"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.svg"
import avatar from "../../assets/img_perfil.jpg"

export const AboutSection = () => {

    return (
        <StyledAboutSection>
            <div className="mainContainer">
                <div className="nameContainer">
                    <img className="avatar" src={avatar}/>
                    <p>Olá, meu nome é Rigel</p>
                </div>
                <div className="titleContainer">
                    <h1>
                        Acompanhe minha <span>jornada</span> de criação e desenvolvimento de <span>projetos</span>
                    </h1>
                </div>
                <div className="textContainer">
                    <p>
                        Possuo experiência em construção de páginas e aplicativos com estilizações responsivas e dinâmicas,
                         utilizando HTML, CSS, Javascript, React e Styled Components. Sigo me aperfeiçoando para aplicar as últimas 
                         tendências e seguir as melhores práticas do setor, almejando entregar produtos
                         de alta qualidade. 
                        Descubra aqui todos meus projetos, as tecnologias utilizadas nos mesmos e como entrar em contato
                    </p>
                </div>
                <div className="buttonsContainer"> 
                    <button className="projects">PROJETOS</button>
                    <a href="https://github.com/RigelM92" target="_blank" className="github" ><img src={github} alt="github"/></a>
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
            </div>
            <div className="backgroundContainer">
                <img className="topImg" src={project2} alt="project image"/>
                <img className="midImg" src={project1} alt="project image"/>
                <img className="bottomImg" src={project3} alt="project image"/>
            </div>
        </StyledAboutSection>
    )

}
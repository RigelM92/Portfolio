import { StyledContactSection } from "./style";
import whatsapp from "../../assets/whatsapp_icon.svg"
import email from "../../assets/email_icon.svg"
import linkedin from "../../assets/linkedin_icon.svg"

export const ContactSection = () => {

    return (
        <StyledContactSection>
            <div className="titleContainer">
                <h3>Juntos podemos desenvolver o site ou 
                    aplicativo <span>ideal para você!</span>
                </h3>
                <p>
                    Divulgue sua marca, estabelecendo sua presença online
                     e alcançando mais clientes  
                </p>
            </div>
            <div className="contactsContainer">
                <div className="contactCard whatsapp">
                    <img src={whatsapp} className="image" alt="icone whatsapp"/>
                    <h4 className="title">Meu telefone</h4>
                    <p className="description">Estou disponível, vamos conversar sobre novos projetos?</p>
                    <span className="link">Ligue agora</span>
                </div>
                <div className="contactCard email">
                    <img src={email} className="image" alt="icone email"/>
                    <h4 className="title">Meu email</h4>
                    <p className="description">Estou disponível, vamos conversar sobre novos projetos?</p>
                    <span className="link">Envie um email</span>
                </div>
                <div className="contactCard linkedin">
                    <img src={linkedin} className="image" alt="icone linkedin"/>
                    <h4 className="title">Meu linkedin</h4>
                    <p className="description">Estou disponível, vamos conversar sobre novos projetos?</p>
                    <span className="link">Acesse meu perfil</span>
                </div>
            </div>
        </StyledContactSection>
    )
}
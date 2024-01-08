import { StyledFooter } from "./style";
import avatar from "../../assets/img_perfil.jpg"
import instagram from "../../assets/Bt-Circle-Instagram.png"
import facebook from "../../assets/Bt-Circle-Facebook.png"
import linkedin from "../../assets/Bt-Circle-Linkedin.png"

export const Footer = () => {

    return (
        <StyledFooter>
            <div className="avatarContainer">
                <img src={avatar}/>
                <div className="textContainer">
                    <span>Obrigado!</span>
                    <p>Me siga nas minhas redes para maiores informações</p>
                </div>
            </div>
            <div className="iconsContainer">
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={linkedin}/>
            </div>
        </StyledFooter>
    )

}
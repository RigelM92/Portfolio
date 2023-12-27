import { StyledHeader } from "./style";
import barsIcon from "../../assets/bars.svg"

export const Header = () => {

    return (
        <StyledHeader>
            <span>Rigel</span>
            <button className="hamburguer"><img src={barsIcon}/></button>
        </StyledHeader>
    )


}
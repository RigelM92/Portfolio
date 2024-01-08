import styled from "styled-components";

export const StyledFooter = styled.footer`

    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;

    padding: 3rem 0rem;
    background-color: black;
    gap: 4rem;

    .avatarContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        img {
            max-width: 40%;
            border-radius: 100%;
            
        }
    }

    .textContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        gap: 2rem;

        span {
            font-size: 24px;
            color: var(--grey-scale-1);
        }

        p {
            font-size: 16px;
            color: var(--grey-scale-3);
        }
    }

    .iconsContainer {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        img {
            max-height: 60%;
        }
    }

    @media(min-width: 1000px) {
        flex-direction: row;
        gap: 0rem;
        padding: 2.5rem 21.5rem 2.5rem 14rem;
        
        .avatarContainer {
            flex-direction: row;
            gap: 3rem;
        }

        .textContainer {
            justify-content: center;
        }

        .avatarContainer {
            img {
                max-width: 15%;
            }
        }

        .iconsContainer {

        }
    }
`
import styled from "styled-components";

export const StyledListItem = styled.li`

    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;

    border: solid 1px black;
    
    h3 {
        font-size: 26px;
        font-weight: 600;
        color: var(--grey-scale-1);
    }

    .languageContainer {
        display: flex;
        align-items: center;
        gap: 2rem;

        p {
            color: var(--grey-scale-3);
        }

        span {
        font-size: 16px;
        color: var(--grey-scale-3);
        background-color: var(--grey-scale-4);
        padding: 0.4rem;
        }
    }

    p {
        line-height: 1.2rem;
        color: var(--grey-scale-3);
    }

    .iconsContainer {
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
            line-height: 1.2rem;
            color: var(--grey-scale-3);
            margin-right: 3rem;
        }

        img { 
            margin-right: 0.5rem;
        }
    }

    @media(min-width: 1000px) {
        width: 40%;

        .iconsContainer {
            justify-content: initial;
        }
    }
`
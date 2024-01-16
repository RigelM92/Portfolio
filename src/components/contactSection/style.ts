import styled from "styled-components"

export const StyledContactSection = styled.section`

    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem 2rem 3rem 2rem;
    background-color: var(--grey-scale-4);

    .titleContainer {
        display: flex;
        flex-direction: column;
        width: 90%;
        gap: 2.5rem;

        h3 {
            font-size: 28px;
            font-weight: 600;
            color: var(--grey-scale-1);
            line-height: 2.2rem;
        }

        span {
            color: var(--color-primary);
        }

        p {
            font-size: 18px;
            color: var(--grey-scale-3);
            line-height: 1.5rem;
        }
    }

    .contactsContainer {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }

    .contactCard {
        display: grid; 
        grid-template-columns: 0.5fr 1.2fr; 
        grid-template-rows: 0.8fr 1fr 1fr; 
        gap: 0px 0px; 
        grid-template-areas: 
            "image title"
            "image description"
            "image link"; 

        a {
            text-decoration: none;
        }

        .image { 
            grid-area: image;
            padding: 1.3rem 1.5rem;
            border-radius: 10px;
        }

        .title { 
            grid-area: title;
            font-size: 18px;
            font-weight: 600;
            color: var(--grey-scale-1);
        } 
            
        .description { 
            grid-area: description;
            line-height: 1.5rem;
            color: var(--grey-scale-3);
        }

        .link { 
            grid-area: link;
            margin-top: auto;
            color: var(--grey-scale-2);
            cursor: pointer;
        }

        &.whatsapp {
            img {
                background-color: var(--color-secondary);
            }
        }

        &.email {
            img {
                background-color: var(--color-tertiary);
            }
        }

        &.linkedin {
            img {
                background-color: var(--color-quarternary);
            }
        }
    }

    @media(min-width: 1000px) {
        flex-direction: row;
        align-items: center;
        gap: 5rem;
        min-height: 75vh;
        padding: 0rem 12.5rem;

        .titleContainer {
            width: 40%;
            padding: 0rem 0rem;
        }

        .contactCard {
            width: 85%;
            grid-template-columns: 0.4fr 1.2fr;
            padding: 0rem 0rem 0rem 0rem;
        }
    }
`
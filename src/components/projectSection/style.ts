import styled from "styled-components"

export const StyledProjectSection = styled.section`

    display: flex;
    flex-direction: column;
    padding: 5rem 2rem 2rem 2rem;
    gap: 3.5rem;

    background-color: black;

    .titleContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
            color: var(--grey-scale-1);
            font-size: 24px;
            font-weight: 600;
        }

        p {
            color: var(--grey-scale-3);
        }

        span {
            color: var(--color-tertiary);
        }
    }

    @media(min-width: 1000px) {
        padding: 5rem 12.5rem;
    }

`
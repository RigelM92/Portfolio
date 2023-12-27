import styled from "styled-components";

export const StyledHeader = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 1rem 2rem;

    background-color: black;
    border-bottom: solid 0.3rem var(--color-primary);

    span {
        color: var(--grey-scale-1);
        font-weight: 600;
    }

    .hamburguer {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.8rem 1rem;
        border-radius: 0.5rem;
        color: var(--grey-scale-2);
        background-color: var(--grey-scale-4);

        img {

        }
    }

    @media(min-width: 1000px) {
        padding: 1rem 12.5rem;
    }

`
import styled from "styled-components";

export const StyledProjectList = styled.ul`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    li:hover {
        transition: 0.5s;
        border: solid 1px var(--grey-scale-4);
    }

    @media(min-width: 1000px) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2.5rem;
    }
`
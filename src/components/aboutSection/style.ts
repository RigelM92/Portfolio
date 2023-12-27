import styled from "styled-components"

export const StyledAboutSection = styled.section`

    display: flex;
    flex-direction: column;
    gap: 3rem;
    height: 80vh;
    padding: 5rem 2rem 3rem 2rem;
    background-color: var(--grey-scale-4);
    overflow: hidden;

    .nameContainer {
        display: flex;
        gap: 2rem;
        color: var(--grey-scale-1);
    }

    .titleContainer {
        width: 90%;

        h1 {
            font-size: 28px;
            font-weight: 600;
            line-height: 2.1rem;
            color: var(--grey-scale-1);
        }

        span {
            color: var(--color-primary);
        }

    }

    .textContainer {
        font-size: 18px;
        line-height: 1.5rem;
        color: var(--grey-scale-3);
    }

    .buttonsContainer {
        display: flex;
        gap: 2rem;

        .projects {
            font-weight: 600;
            padding: 1rem 2.5rem;
            border-radius: 0.8rem;
            color: var(--grey-scale-1);
            background-color: var(--color-primary);
            cursor: pointer;
        }
        
        .projects:hover {
            color: var(--grey-scale-4);
            background-color: var(--color-primary-50);
        }

        .github {
            border-radius: 100%;
            padding: 1rem 1rem;
            background-color: var(--grey-scale-1);
            cursor: pointer;

            img {
                height: 100%;
            }
        }

        .github:hover {
            background-color: var(--grey-scale-3);
        }
    }

    .iconsWrapper {
        margin-top: 1rem;
        bottom: 0;
        left: 0;
        white-space: nowrap;
        overflow: hidden;
    }

    .iconsContainer {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        justify-content: center;
        animation: scrollAnimation 8s linear infinite;
    }
    
    @keyframes scrollAnimation {
        0% {
            transform: translateX(100%); /* Start from the right */
        }
        100% {
            transform: translateX(-100%); /* Move to the left */
        }
    }
    
    @media(min-width: 1000px) {
        height: 65vh;
        padding: 5rem 12.5rem 0rem 12.5rem;

        .iconsWrapper {
            display: flex;
        }

        .iconsContainer {
            animation: none;
        }

    }

`
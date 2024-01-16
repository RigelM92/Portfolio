import styled from "styled-components"

export const StyledAboutSection = styled.section`

    display: flex;
    padding: 5rem 2rem 3rem 2rem;
    border-bottom: solid 0.3rem var(--grey-scale-1);
    background-color: var(--grey-scale-4);
    overflow: hidden;

    .mainContainer {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 3rem;
    }

    .avatar {
        max-width: 50%;
        border-radius: 100%;
    }

    .backgroundContainer {
        display: none;
    }
    
    .nameContainer {
        display: flex;
        gap: 2rem;
        color: var(--grey-scale-1);
        align-items: center;

        p {
            line-height: 1.5rem;
        }
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
        height: 71vh;
        padding: 0rem 0rem 0rem 12.5rem;

        .mainContainer {
            padding-top: 5rem;
        }

        .avatar {
            max-width: 10%;

        }

        .iconsWrapper {
            display: flex;
        }
        
        .iconsContainer {
            animation: none;
        }
        
        .backgroundContainer {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .midImg, .topImg, .bottomImg {
            min-width: 100%;
            opacity: 60%;
        }

        .midImg {
            position: absolute;
            top: 0;
            left: 4%;
        }

        .topImg, .bottomImg {
            position: relative;
            z-index: 1;
        }

        .topImg {
            top: -57%;
            left: 2.5%;
        }

        .bottomImg {
            margin-top: -48%;
            right: -2%;
        }
    }
    
    @media(min-width: 1700px) {
        .topImg {
            top: -52%;
        }
    }
`
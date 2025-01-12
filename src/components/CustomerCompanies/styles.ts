import styled from "styled-components";

export const Container = styled.section`
    margin-top: 7rem;

    p {
        padding: 0 1rem;
        opacity: 0.7;
    }
`

export const Logos = styled.div`
    overflow: hidden;
    white-space: nowrap;
    margin: 3rem 0;

    div {
        display: inline-block;
        overflow: hidden;
        animation: 20s slide infinite linear;

        img {
            width: 20rem;
            margin-right: 2rem;
            opacity: 0.7;

            transition: opacity .5s;

            &:hover {
                opacity: 1;
            }
        }
    }

    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }
`

export const Flyers = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    max-width: 66rem;
    margin: 0 auto;

    @media (max-width: 850px) {
        & {
            display: none;
        }
    }
`

export const FlyersMobile = styled.div`
    display: none;

    .swiper-pagination {
        margin-bottom: 1rem;
    }

    @media (max-width: 850px) {
        display: block;
    }
`

export const Flyer = styled.div`
    position: relative;

    img {
        width: 21.5rem;
        transition: filter .5s;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        color: var(--light-green);

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        opacity: 0;
        transition: opacity .5s;

        pointer-events: none;
    }

    &:hover {
        img {
            filter: brightness(0.5);
        }

        a {
            opacity: 1;
            pointer-events: all;
        }
    }

    @media (max-width: 1080px) {
        img {
            width: 20rem;
        }
    }

    @media (max-width: 850px) {
        & {
            pointer-events: none;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;

            margin: 0 auto;
            transform: none;

            color: var(--light-green);

            position: static;

            opacity: 1;
            pointer-events: all;
        }
    }
`
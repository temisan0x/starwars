import styled from "styled-components";

export const Container = styled.div`
    width:14rem;
    position: relative;
    transition: all 0.5s ease-in;
    border-radius: 0.5rem;
    z-index:2;
    
    @media screen and (max-width:480px) {
        width: 80%;
    }
    > button { 
            display:flex;
            align-items: center;
            justify-content: center;
            position:absolute;
            top: 1rem;
            left: 1rem;
            border: none;
            background: transparent;
            z-index: 9;

            svg{
                color: ${({ theme }) => theme.colors.warning.main};
            }

            &:hover {
                svg {
                    color: ${({ theme }) => theme.colors.warning.dark}
            }
        }
    }

    &:hover {
        .card-name {
            a {
                position: relative;

                &::after {
                    content: "";
                    position: absolute;
                    background-color: ${({ theme }) => theme.colors.primary.main};
                    left: 0;
                    width: 100%;
                    bottom: -2px;
                    height: 4px;
                }
            }
        }
    }

    img {
        width: 100%;
        border-radius:0.5rem; 
    }

    .card-name {
        position: absolute;
        left: 0;
        bottom: 0px;
        right: 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            background-color: ${({ theme }) => theme.colors.primary.main};
            width: 100%;
            height:2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            color: ${({ theme }) => theme.colors.dark[900]};
            transition: all 0.3s ease-in;

            &:hover {
                background-color: ${({ theme }) => theme.colors.light[900]};
            }
        }
    }
`
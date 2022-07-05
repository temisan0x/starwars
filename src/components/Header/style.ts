import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    font-size:1rem;

    img {
        width: 80px;
    }

    nav{
        display: flex;
        align-item: center;
        justify-content: space-between;
        text-transform: capitalize;
    }

    a {
        display:flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.5s ease-in;
        color:white;
        text-decoration:none;
        
        &:hover {
            color: ${({ theme }) => transparentize(0, theme.colors.primary.light)}
        }

        svg {
            margin-right:0.5rem;
        }
    }
    
    a + a {
        margin-left:1.5rem
    }

    @media screen and (max-width:500px) {
        flex-direction: column;
        align-items: center;

        nav{
            flex-direction: row;
            width: 100%;
            justify-content: space-between !important;

            a  + a {
                margin-left:0 !important;
            }
        }

        a {
            margin-bottom: 1.5rem;
        }
    }
`
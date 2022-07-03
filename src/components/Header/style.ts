import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;

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
        margin-right:30px;
        color:white;
        text-decoration:none;
        
        &:hover {
            color: ${({ theme }) => transparentize(0, theme.colors.primary.light)}
        }
    }

    @media screen and (max-width:480px) {
        flex-direction: column;
        align-items: flex-start;

        nav{
            flex-direction: column;
            justify-content: center !important;

            a  + a {
                margin-left:0 !important;
            }
        }

        a {
            width: 100%;
            margin-bottom: 1.5rem;
        }
    }
`
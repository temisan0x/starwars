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
        transition: all 0.5s ease-in-out;
        margin-right:30px;
        color:white;
        text-decoration:none;
        
        &:hover {
            color: ${({theme})=> transparentize(0.8, theme.colors.primary.light)}
        }
    }
`
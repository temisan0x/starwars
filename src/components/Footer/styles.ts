import styled from 'styled-components';


export const Container = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        text-align: center;
    }

    a {
        color : ${({ theme }) => theme.colors.primary.main};
        transition: all 0.5s ease-in-out;
        text-decoration:none;
        
        &:hover {
            color:${({ theme }) => theme.colors.primary.dark}
        }
    }
`
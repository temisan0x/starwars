import styled  from 'styled-components';

export const Container = styled.div`
    .title {
        margin-bottom: 2rem;
        padding: 0 1rem;

    
        span {
            position: relative;
            color: ${({ theme }) => theme.colors.primary.light};
            
            &::after {
                content: "";
                bottom: -2px;
                left: 0;
                height:4px;
                background-color: ${({ theme})=> theme.colors.primary.main}
            }
        }
    }

    
`
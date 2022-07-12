import styled from 'styled-components';

export const Container = styled.div`
    .title {
        margin-bottom:2rem;
        padding: 0 1rem;

        span{
            position:relative;
            color: ${({ theme }) => theme.colors.primary.light};
            
            &::after {
                content: "";
                background-color:${({ theme }) => theme.colors.primary.main};
                position: absolute;
                height:5px;
                width: 100%;
                bottom:-2px;
                left:0;
            }
        }

        @media screen and (max-width:480px) { 
            h1 {
                font-size: 20px;
            }
        }
    }

    .header {
        display:flex;
        justify-content: space-between;
        align-items:center;

        .select {
            padding:0 1rem;

            button + button{
                margin-left: 2rem;
            }
        }

        @media screen and (max-width:950px) {
            flex-direction: column;
            justify-content:center;

            .select {
                margin-top:1rem;
            }

            .pagination{
                margin-top:1rem;
            }
        }
    }
`
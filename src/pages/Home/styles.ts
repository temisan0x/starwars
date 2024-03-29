import styled from 'styled-components';

export const Container = styled.div`
    .title {
        margin-bottom: 2rem;
        padding: 0 1rem;

        @media screen and (max-width:480px) { 
            h1 {
                font-size: 20px;
            }
        }
    
        span {
            position: relative;
            color: ${({ theme }) => theme.colors.primary.light};
            
            &::after {
                content: "";
                position: absolute;
                bottom: -2px;
                width: 100%;
                left: 0;
                height:4px;
                background-color: ${({ theme }) => theme.colors.primary.main}
            }
        }
    }

    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;

        .select {
            button + button {
                margin-left: 2rem;
            }
        }

        .pagination {
            display: flex;
            align-items: center;
            justify-content: center;

            button + button {
                margin-left: 1rem;
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

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;

        >div {
            font-size: 2rem;
        }
    }

    .cards {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 2rem;

        >div {
            margin:1rem;
        }

        @media screen and (max-width:480px){
            flex-direction: column;
            align-items: center;
            justify-content: center;

            > div {
                margin: 1rem 0;
            }
        }

    }
`
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

`
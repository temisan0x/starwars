import styled from 'styled-components';

interface IPaginationBtnProps {
    isActive?: boolean;
}

export const PaginationBtn = styled.button<IPaginationBtnProps>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    border: none;
    
`
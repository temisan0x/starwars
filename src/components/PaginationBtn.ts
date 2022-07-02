import { transparentize } from 'polished';
import styled from 'styled-components';

interface IPaginationBtnProps {
    isActive?: boolean;
}
const color = '#fdb810';

export const PaginationBtn = styled.button<IPaginationBtnProps>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    border: none;
    background-color: ${transparentize(0.05, color)}
    
`
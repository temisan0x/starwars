import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface IPaginationBtnProps {
    isActive?: boolean;
}

export const PaginationBtn = styled.button<IPaginationBtnProps>`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 4px;
    border: none;
    background-color: ${({ theme }) => transparentize(0.8, theme.colors.secondary.dark)};
    color: ${({ theme }) => theme.colors.light[300]}}

    &[disabled] {
        background-color: ${({ theme }) => theme.colors.light[300]};
        cursor: not-allowed;
    }

    svg {
        text-align: center;
    }


${({ isActive }) => isActive && css`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius:50%;
    font-weight:bold;
`}
`
PaginationBtn.defaultProps = { isActive: false };
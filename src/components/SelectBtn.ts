import styled, { css } from "styled-components"

interface ISelectBtnProps {
    isSelected: boolean;
}

export const SelectBtn = styled.button<ISelectBtnProps>`
    background: ${({ theme }) => theme.colors.light[900]};
    border: none;

    ${({ theme, isSelected }) => isSelected && css`
        border-bottom: 1px solid ${theme.colors.primary.main};
    `}
`
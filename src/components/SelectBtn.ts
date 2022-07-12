import styled, { css } from "styled-components"

interface ISelectBtnProps {
    isSelected: boolean;
}

export const SelectBtn = styled.button<ISelectBtnProps>`
    color: ${({ theme }) => theme.colors.light[900]};
    outline: none;
    background: transparent;
    border: 0;
    padding: 5px;
    font-size: 15px;

    ${({ theme, isSelected }) => isSelected && css`
        border-bottom: 2px solid ${theme.colors.primary.main};
    `}
`;

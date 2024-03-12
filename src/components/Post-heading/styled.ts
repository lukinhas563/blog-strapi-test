import styled, { css } from 'styled-components';

export const Conainer = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.superLarge};
        margin: ${theme.spacings.large};
        text-align: center;
    `}
`;

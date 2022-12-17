import styled, { css } from 'styled-components';

export const Container = styled.footer(
  ({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.backgroundPrimary};
    border-top: 1px solid ${colors.primary};
    display: flex;
    justify-content: center;
  `,
);

export const Text = styled.p`
  letter-spacing: 1px;
`;

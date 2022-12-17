import styled, { css } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  text-indent: 6px;
`;

export const Error = styled.span(
  ({ theme: { colors } }) => css`
    color: ${colors.error};
    min-height: 16px;
    text-align: center;
    word-break: break-all;
  `,
);

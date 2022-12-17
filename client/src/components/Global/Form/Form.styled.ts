import styled, { css } from 'styled-components';

// gap: CSSProperties['gap']

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SplitedFields = styled.div(
  () => css`
    display: grid;
    gap: '16px 32px';
    grid-template-columns: '1fr 1fr';
  `,
);

export const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

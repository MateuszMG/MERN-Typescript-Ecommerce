import styled, { css } from 'styled-components';

export const defaultInputStyle = css(
  ({ theme: { colors } }) => css`
    background-color: ${colors.backgroundSecondary};
    border-radius: 8px;
    border: none;
    color: ${colors.primary};
    margin: 6px 0;
    padding: 8px;
    text-indent: 4px;
    transition: box-shadow 0.2s;
    width: 100%;

    &::placeholder {
      color: ${colors.primary};
      font-style: italic;
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    &:focus {
      box-shadow: 0 0 5px 2px ${colors.primary};
      outline: none;
      text-indent: 6px;
      background-color: #222;
    }

    &:hover {
      background-color: #222;
    }
  `,
);

export const InputTag = styled.input`
  ${defaultInputStyle}
`;

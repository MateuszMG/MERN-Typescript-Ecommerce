import styled, { css } from 'styled-components';

export const ButtonTag = styled.button<{
  disabled?: boolean;
  isLoading?: boolean;
}>(
  ({ theme: { colors }, disabled, isLoading }) => css`
    background-color: ${colors.backgroundSecondary};
    border-radius: 8px;
    border: none;
    box-shadow: 1px 1px 3px 1px ${colors.primary};
    color: ${colors.fontPrimary};
    cursor: pointer;
    letter-spacing: 1px;
    margin: 6px 12px;
    padding: 8px 32px;
    transition: 0.3s;

    &:hover {
      box-shadow: 2px 2px 3px 3px ${colors.primary};
    }
    &:focus {
      box-shadow: 0 0 3px 1px ${colors.primary};
    }

    ${disabled &&
    css`
      box-shadow: none;

      &:hover {
        box-shadow: none;
      }

      &:focus {
        box-shadow: none;
      }
    `}
  `,
);

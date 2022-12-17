import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import MuiLogoutIcon from '@mui/icons-material/Logout';
import MuiPersonIcon from '@mui/icons-material/Person';

export const Nav = styled.nav``;

export const List = styled.div(
  ({ theme: { colors } }) => css`
    align-items: center;
    background-color: ${colors.backgroundPrimary};
    border-bottom: 1px solid ${colors.primary};
    display: flex;
    justify-content: space-between;
    min-height: 40px;
    padding: 0 12px;
  `,
);

export const Link = styled(RouterLink)(
  ({ theme: { colors } }) => css`
    padding: 4px;
    text-underline-offset: 4px;
    transition: 0.3s;

    &:hover {
      color: ${colors.primary};
    }
  `,
);

export const AuthLinksWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
`;

const iconStyles = css(
  ({ theme: { colors } }) => css`
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: ${colors.primary};
    }
  `,
);

export const LogoutIcon = styled(MuiLogoutIcon)`
  ${iconStyles}
`;
export const PersonIcon = styled(MuiPersonIcon)`
  ${iconStyles}
`;

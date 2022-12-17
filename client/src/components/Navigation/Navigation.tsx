import { logout } from '../../redux/slices/user';
import { paths } from '../../routes/paths';
import { separateString } from '../../helpers/strings';
import { useAppSelector } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../redux/apiSlices/user';
import { useNavigate } from 'react-router-dom';
import {
  AuthLinksWrapper,
  Link,
  List,
  LogoutIcon,
  Nav,
  PersonIcon,
} from './Navigation.styled';

interface NavigationLinkProps {
  path: string;
}

const NavigationLink = ({ path }: NavigationLinkProps) => (
  <Link to={path}>{path === '/' ? 'Home' : separateString(path.slice(1))}</Link>
);

export const Navigation = () => {
  const { user } = useAppSelector();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [logoutApi] = useLogoutMutation();

  return (
    <Nav>
      <List>
        <NavigationLink path={paths.home} />

        <AuthLinksWrapper>
          {user._id ? (
            <>
              <PersonIcon onClick={() => navigate(paths.profile)} />
              <LogoutIcon
                onClick={() => {
                  logoutApi(user._id!);
                  dispatch(logout());
                }}
              />
            </>
          ) : (
            <>
              <NavigationLink path={paths.login} />
              <NavigationLink path={paths.register} />
            </>
          )}
        </AuthLinksWrapper>
      </List>
    </Nav>
  );
};

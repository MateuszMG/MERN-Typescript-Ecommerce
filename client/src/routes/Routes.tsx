import { Layout } from '../components/Layout/Layout';
import { paths } from './paths';
import { Roles } from '../const';
import { routesConfig } from './routesConfig';
import { useEffect } from 'react';
import { useAppSelector } from '../redux/store';
import {
  Route,
  Routes as Switch,
  useLocation,
  useNavigate,
} from 'react-router-dom';

export const Routes = () => {
  const { user } = useAppSelector();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathname = location.pathname.replaceAll('%20', ' ');
    const roles =
      routesConfig.find((item) => item.path === pathname)?.roles || [];

    !user._id && roles?.includes(Roles.USER) && navigate(paths.login);
    user._id && roles?.includes(Roles.NOT_LOGGED) && navigate(paths.profile);
  }, [location.pathname, user._id]);

  return (
    <Layout>
      <Switch>
        {routesConfig.map(({ component: Component, path }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Switch>
    </Layout>
  );
};

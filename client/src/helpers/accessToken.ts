import { addToLS } from './localStorage';
import { UserRoles } from '../const';
import jwtDecode from 'jwt-decode';

interface AccessToken {
  accessToken: string;
}

export interface UserFromJWT {
  _id: string;
  email: string;
  username: string;
  roles: UserRoles[];
}

export const handleAccessToken = (data: AccessToken) => {
  let user = null;

  try {
    user = jwtDecode(data.accessToken);
  } catch (err) {}

  if (!user) return null;

  addToLS('accessToken', data.accessToken);

  return {
    ...(user as UserFromJWT),
    accessToken: data.accessToken,
  };
};

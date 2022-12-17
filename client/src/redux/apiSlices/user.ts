import { apiSlice } from '../api/api';
import { handleAccessToken, UserFromJWT } from '../../helpers/accessToken';
import { LoginSchema } from '../../pages/Auth/Login';
import { RegisterSchema } from '../../pages/Auth/Register';

export interface User extends UserFromJWT {
  accessToken: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<User | null, RegisterSchema>({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
      transformResponse: handleAccessToken,
    }),
    login: builder.mutation<User | null, LoginSchema>({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['User'],
      transformResponse: handleAccessToken,
    }),
    logout: builder.mutation<null, string>({
      query: (id) => ({
        url: `/logout/${id}`,
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  userApiSlice;

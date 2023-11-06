import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Users } from './types';

export const usersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUser: builder.query<Users, void>({
      query: () => 'users',
      providesTags: ['Users'],
    }),
    AddUser: builder.mutation<{}, Users>({
      query: (newUser) => {
        return {
          url: 'users',
          method: 'POST',
          body: newUser,
        };
      },
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<void, any>({
      query: ({ id, user }) => {
        return {
          url: `users/${id}`,
          method: 'PUT',
          body: user,
        };
      },

      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi;

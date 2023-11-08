import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<Users[], void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getUser: builder.query<Users, any>({
      query: (id) => `/users/${id}`,
      providesTags: ['Users'],
    }),
    AddUser: builder.mutation<{}, Users>({
      query: (newUser) => {
        return {
          url: '/users',
          method: 'POST',
          body: newUser,
        };
      },
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<void, any>({
      query: (user) => {
        return {
          url: `/users/${user.id}`,
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
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi;

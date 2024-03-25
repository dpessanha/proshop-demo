import { USERS_URL } from '../constants.js'
import { apiSlice } from './apiSlice.js'

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        // eslint-disable-next-line no-undef
        url: USERS_URL / login,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = usersApiSlice

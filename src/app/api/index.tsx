import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../../entities/post'

export const postsApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
    getPosts: build.query({
      query: ({ limit = 10, page = 1 }) => ({
        url: 'posts',
        params: {
          _limit: limit,
          _page: page,
        },
      }),
      transformResponse(response: Post[], meta) {
        return { response, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) }
      },
    }),
    getPostById: build.query({
      query: (id) => `posts/${id}`,
    }),
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi

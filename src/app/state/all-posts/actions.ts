import {PostsType} from "./post-type";

// AC creators
export const getAllPostsAC = (posts: PostsType) => ({type: 'ALL-POSTS/GET-POSTS', posts}) as const
export const getSelectedUsersPostsAC = (posts: PostsType) => ({type: 'ALL-POSTS/GET-SELECTED-USERS-POSTS', posts}) as const

// Types
export type ActionsType = ReturnType<typeof getAllPostsAC> | ReturnType<typeof getSelectedUsersPostsAC>
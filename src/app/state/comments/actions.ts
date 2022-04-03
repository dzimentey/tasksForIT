import {CommentsType} from "./comments-type";

export type ActionsType = ReturnType<typeof getCommentsAC> | ReturnType<typeof filterCommentsAC>

//AC creator
export const getCommentsAC = (comments: CommentsType) => ({type: 'COMMENTS/GET-COMMENTS', comments}) as const
export const filterCommentsAC = (postId: number) => ({type: 'COMMENTS/FILTER-COMMENTS', postId}) as const
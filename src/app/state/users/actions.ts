import {UsersType} from "./users-type";

// Types
export type ActionsType = ReturnType<typeof getUsersAC> | ReturnType<typeof changeUserStatusAC>
                          | ReturnType<typeof setUserStatusAC>

//Action Creators
export const getUsersAC = (users: UsersType) => ({type: 'USERS/GET-USERS', users}) as const
export const changeUserStatusAC = (id: number, isChecked: boolean) => ({type: 'USERS/CHANGE-USER-STATUS', id, isChecked}) as const
export const setUserStatusAC = (idArray: Array<number>) => ({type: 'USERS/SET-USERS-STATUS', idArray}) as const
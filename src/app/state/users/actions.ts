import {UsersType} from "./users-type";

// Types
export type ActionsType = ReturnType<typeof getUsersAC> | ReturnType<typeof changeUserStatusAC>

//Action Creator
export const getUsersAC = (users: UsersType) => ({type: 'USERS/GET-USERS', users}) as const
export const changeUserStatusAC = (id: number, isChecked: boolean) => ({type: 'USERS/CHANGE-USER-STATUS', id, isChecked}) as const
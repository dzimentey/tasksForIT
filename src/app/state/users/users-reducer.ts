import {UsersType} from "./users-type";
import {ActionsType} from "./actions";

export const usersReducer = (state: UsersType = [], action: ActionsType): UsersType => {
    switch (action.type) {
        case "USERS/GET-USERS":
            return action.users.map(u => ({...u, isChecked: false}))
        case "USERS/CHANGE-USER-STATUS":
            return state.map(u => u.id === action.id ? {...u,  isChecked: action.isChecked} : u)
        default:
            return state
    }
}



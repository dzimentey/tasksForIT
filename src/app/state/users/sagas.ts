import {AxiosResponse} from "axios";
import {ActionType, UsersType} from "./users-type";
import {call, put} from "redux-saga/effects";
import {usersAPI} from "../../../api/api";
import {changeUserStatusAC, getUsersAC} from "./actions";
import {Dispatch} from "redux";

// Saga

export function* getUsersSaga(action: ActionType) {

    try {
        const res: AxiosResponse<UsersType> = yield call(usersAPI.getUsersForFilter)
        yield put(getUsersAC(res.data))
    }
    catch(error){
        console.log(error)
    }
    finally {
        yield action.dispatch(getCheckedUsers())
    }
}

export const getUsers = (dispatch: Dispatch) => ({type: 'GET-USERS', dispatch}) as const

//Thunk

export const getCheckedUsers = () => (dispatch: Dispatch) => {
    const url = new URL(window.location.href)
    const paramsArray = url.search.slice(1).split('&')
    paramsArray.forEach(u => dispatch(changeUserStatusAC(+u.slice(7), true)))
}

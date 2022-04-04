import {AxiosResponse} from "axios";
import {UsersType} from "./users-type";
import {call, put} from "redux-saga/effects";
import {usersAPI} from "../../../api/api";
import {changeUserStatusAC, getUsersAC} from "./actions";
import {Dispatch} from "redux";


export function* getUsersSaga() {

    try {
        const res: AxiosResponse<UsersType> = yield call(usersAPI.getUsersForFilter)
        yield put(getUsersAC(res.data))
    }
    catch(error){
        console.log(error)
    }
}

export const getUsers = () => ({type: 'GET-USERS'}) as const

//Thunk

export const getCheckedUsers = () => (dispatch: Dispatch) => {
    const url = new URL(window.location.href)
    const paramsArray = url.search.slice(1).split('&')
    usersAPI.getUsersForFilter()
        .then((res)  => {
            paramsArray.forEach(u => dispatch(changeUserStatusAC(+u.slice(7), true)))
        })
        .catch((error) => {
                console.log(error.message)
            }
        )
}

// const paramsArray = url.search.slice(1).split('&')
//
// const func = (paramsArray: any) => {
//    paramsArray.forEach((u: any) =>  {
//
//        console.log(u.slice(7))
//        put(changeUserStatusAC(+u.slice(7), true))
//    })
// }
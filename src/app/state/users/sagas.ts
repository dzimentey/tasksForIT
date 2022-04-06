import {AxiosResponse} from "axios";
import {UsersType} from "./users-type";
import {call, put} from "redux-saga/effects";
import {usersAPI} from "../../../api/api";
import {getUsersAC, setUserStatusAC} from "./actions";

// Saga

export function* getUsersSaga(action: ReturnType<typeof getUsers>) {

    try {
        const res: AxiosResponse<UsersType> = yield call(usersAPI.getUsersForFilter)
        yield put(getUsersAC(res.data))
    }
    catch(error){
        console.log(error)
    }
    finally {
        const paramsArray = action.urlParams.split('&')
        const idArray: Array<number> = []
        paramsArray.forEach(u => idArray.push(+u.slice(7)))
        yield put(setUserStatusAC(idArray))
    }
}

export const getUsers = (urlParams: string) => ({type: 'GET-USERS', urlParams}) as const

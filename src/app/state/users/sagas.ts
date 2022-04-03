import {AxiosResponse} from "axios";
import {UsersType} from "./users-type";
import {call, put} from "redux-saga/effects";
import {usersAPI} from "../../../api/api";
import {getUsersAC} from "./actions";

//Saga

export function* getUsersSaga() {
    try {
        const res: AxiosResponse<UsersType> = yield call(usersAPI.getUsersForFilter)
        yield put(getUsersAC(res.data))
    }
    catch(error){
        console.log(error)
    }
}

export const getUsers = () => ({type: 'GET-USERS'})

//Thunk

// export const getUsersTC = () => (dispatch: Dispatch) => {
//     usersAPI.getUsersForFilter()
//         .then((res)  => {
//             dispatch(getUsersAC(res.data))
//         })
//         .catch((error: AxiosError) => {
//                 console.log(error.message)
//             }
//         )
// }
import {AxiosResponse} from "axios";
import {PostsType} from "./post-type";
import {call, put} from "redux-saga/effects";
import {usersAPI} from "../../../api/api";
import {getAllPostsAC, getSelectedUsersPostsAC} from "./actions";
import {setStatusAC} from "../../app-reducer";


// Saga

export function* getAllPostsSaga(action: ReturnType<typeof getAllPosts>) {
    try {
        const res: AxiosResponse<PostsType> = yield call(usersAPI.getAllPosts)
        yield put(getAllPostsAC(res.data))
    }
    catch(error){
        console.log(error)
    }
}

export const getAllPosts = () => ({type: 'GET-ALL-POSTS'}) as const


export function* getSelectedUsersPostsSaga(action: ReturnType<typeof getSelectedUsersPosts>) {
    yield put(setStatusAC(true))
    try {
        const res: AxiosResponse<PostsType> = yield call(usersAPI.getSelectedUsersPosts, action.data)
        yield put(getSelectedUsersPostsAC(res.data))
    }
    catch(error){
        console.log(error)
    }
    finally {
        yield put(setStatusAC(false))
    }
}

export const getSelectedUsersPosts = (data: string) => ({type: 'GET-SELECTED-POSTS', data}) as const


//Thunk

// export const getAllPostsTC = () => (dispatch: Dispatch) => {
//     usersAPI.getAllPosts()
//         .then((res) => {
//             dispatch(getAllPostsAC(res.data))
//         })
//         .catch((error: AxiosError)=> {
//                 console.log(error.message)
//             }
//         )
// }


// export const getSelectedUsersPostsTC = (data:string) => (dispatch: Dispatch) => {
//     usersAPI.getSelectedUsersPosts(data)
//         .then((res) => {
//            // console.log(res.data)
//             dispatch(getSelectedUsersPostsAC(res.data))
//         })
//         .catch((error: AxiosError)=> {
//                 console.log(error.message)
//             }
//         )
// }

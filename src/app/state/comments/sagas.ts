import {AxiosResponse} from "axios";
import {CommentsType} from "./comments-type";
import {call, put} from "redux-saga/effects";
import {usersAPI} from "../../../api/api";
import {getCommentsAC} from "./actions";
import {setStatusAC} from "../../app-reducer";

//Saga

export function* getCommentsSaga(action: ReturnType<typeof getComments>) {
    yield put(setStatusAC(true))
    try {
        const res: AxiosResponse<CommentsType> = yield call(usersAPI.getComments, action.postId)
        yield put(getCommentsAC(res.data))
    }
    catch(error){
        console.log(error)
    }
    finally {
        yield put(setStatusAC(false))
    }
}

export const getComments = (postId: number) => ({type: 'GET-COMMENTS', postId}) as const


//Thunk

// export const getCommentsTC = (postId: number) => (dispatch: Dispatch) => {
//     usersAPI.getComments(postId)
//         .then((res) => {
//             dispatch(getCommentsAC(res.data))
//         })
//         .catch((error) => {
//                 console.log(error)
//             }
//         )
// }
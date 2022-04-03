import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {usersReducer} from "./users/users-reducer";
import {allPostsReducer} from "./all-posts/all-posts-reducer";
import {commentsReducer} from "./comments/coments-reducer";
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';
import {getAllPostsSaga, getSelectedUsersPostsSaga} from "./all-posts/sagas";
import {getCommentsSaga} from "./comments/sagas";
import {getUsersSaga} from "./users/sagas";

export type AppRootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    users: usersReducer,
    allPosts: allPostsReducer,
    comments: commentsReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(rootWatcher)

function* rootWatcher() {
    yield takeEvery('GET-USERS', getUsersSaga)
    yield takeEvery('GET-COMMENTS', getCommentsSaga)
    yield takeEvery('GET-ALL-POSTS', getAllPostsSaga)
    yield takeEvery('GET-SELECTED-POSTS', getSelectedUsersPostsSaga)
}
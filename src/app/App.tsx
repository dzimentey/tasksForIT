import React, {useEffect,} from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {useSearchParams} from "react-router-dom";
import {Filer} from "./components/Filter";
import {Posts} from "./components/Posts";
import {PostsType} from "./state/all-posts/post-type";
import {getSelectedUsersPosts} from "./state/all-posts/sagas";
import {CommentsType} from "./state/comments/comments-type";
import {filterCommentsAC} from "./state/comments/actions";
import {getComments} from "./state/comments/sagas";
import {UsersType} from "./state/users/users-type";
import {getUsers} from "./state/users/sagas";
import {changeUserStatusAC} from "./state/users/actions";
import {LinearProgress} from "@mui/material";

function App() {

    const dispatch = useDispatch()
    const users = useSelector<AppRootStateType, UsersType>(state => state.users)
    const allPosts = useSelector<AppRootStateType, PostsType>(state => state.allPosts)
    const comments = useSelector<AppRootStateType, CommentsType>(state => state.comments)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading)
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        dispatch(getUsers(dispatch))
        dispatch(getSelectedUsersPosts(searchParams.toString()))
    }, [])

    const getPostsByUser = (id: number, isChecked: boolean) => {

        const setUsers = (userId: number) => {
            searchParams.append('userId', `${userId}`)
            setSearchParams(searchParams)
            dispatch(getSelectedUsersPosts(searchParams.toString()))
        }

        if (!isChecked) {
            dispatch(changeUserStatusAC(id, isChecked))
            const paramsArray = searchParams.toString().split('&') // get params, convert to the Array
            const newArray = paramsArray.filter(u => u.slice(7) !== id.toString()) // remove repeated params
            const newParams = newArray.join('&') // join back to sting
            setSearchParams(newParams)
            dispatch(getSelectedUsersPosts(newParams))
        } else {
            dispatch(changeUserStatusAC(id, isChecked))
            setUsers(id)
        }
    }

    const hideComments = (postId: number) => {
        dispatch(filterCommentsAC(postId))
    }

    const getCommentsForPost = (postId: number) => {
       dispatch(getComments(postId))
    }

    return (
        <div className={'App'}>
            <div className={'mainBlock'}>
                <div>
                    {isLoading && <LinearProgress color={'secondary'} className={'progress'}/>}
                    <Posts allPosts={allPosts} hideComments={hideComments}
                            getCommentsForPost={getCommentsForPost} comments={comments}/>
                </div>
                <Filer users={users} getPostsByUser={getPostsByUser}/>
            </div>
        </div>
    )
}
export default App;

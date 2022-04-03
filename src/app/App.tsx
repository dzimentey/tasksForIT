import React, {useEffect} from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {debounce} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {Filer} from "./components/Filter";
import {Posts} from "./components/Posts";
import {PostsType} from "./state/all-posts/post-type";
import {getAllPosts, getSelectedUsersPosts} from "./state/all-posts/sagas";
import {CommentsType} from "./state/comments/comments-type";
import {filterCommentsAC} from "./state/comments/actions";
import {getComments} from "./state/comments/sagas";
import {UsersType} from "./state/users/users-type";
import {getUsers} from "./state/users/sagas";
import {changeUserStatusAC} from "./state/users/actions";


function App() {

    const dispatch = useDispatch()
    const url = new URL(window.location.href)
    const users = useSelector<AppRootStateType, UsersType>(state => state.users)
    const allPosts = useSelector<AppRootStateType, PostsType>(state => state.allPosts)
    const comments = useSelector<AppRootStateType, CommentsType>(state => state.comments)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getUsers())
    }, [])

    useEffect( () => {
        const paramsArray = url.search.slice(1).split('&')
        setTimeout(() => {
            dispatch(getSelectedUsersPosts(url.search))
        }, 500)
        setTimeout(() => {
            paramsArray.forEach(u => dispatch(changeUserStatusAC(+u.slice(7), true)))
        }, 700)
    },[])

    const getPostsByUser = debounce((id: number, isChecked: boolean) => {

        const setUsers = (userId: number) => {
            url.searchParams.append('userId', `${userId}`)
            //window.history.replaceState({}, '', url)
            navigate(url)
            dispatch(getSelectedUsersPosts(url.search))
        }

        if (!isChecked) {
            dispatch(changeUserStatusAC(id, isChecked))
            const paramsArray = url.search.slice(1).split('&') // get params, remove "?" from beginning of the sting, convert to the Array
            const newArray = paramsArray.filter(u => u.slice(7) !== id.toString()) // remove repeated params
            const newParams = newArray.join('&') // join back to sting
            //window.history.replaceState({}, '', `${window.location.pathname}?${newParams}`) // native code of adding params to the url bar
            navigate(`?${newParams}`) // add params to the URL and put it in the url bar
            dispatch(getSelectedUsersPosts(`?${newParams}`))
        } else {
            dispatch(changeUserStatusAC(id, isChecked))
            setUsers(id)
        }
    }, 500)

    const hideComments = debounce((postId: number) => {
        dispatch(filterCommentsAC(postId))
    },500)

    const getCommentsForPost = debounce((postId: number) => {
       dispatch(getComments(postId))
    }, 500)

    return (
        <div className={'App'}>
            <div className={'mainBlock'}>
                <Posts allPosts={allPosts} hideComments={hideComments}
                       getCommentsForPost={getCommentsForPost} comments={comments}/>
                <Filer users={users} getPostsByUser={getPostsByUser}/>
            </div>
        </div>
    )
}
export default App;

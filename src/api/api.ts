import axios from 'axios'
import {PostsType} from "../app/state/all-posts/post-type";
import {CommentsType} from "../app/state/comments/comments-type";
import {UsersType} from "../app/state/users/users-type";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

// api

export const usersAPI = {
    getAllPosts() {
        return instance.get<PostsType>('posts')
    },
    getUsersForFilter() {
        return instance.get<UsersType>('users')
    },
    getComments(postId: number){
        return instance.get<CommentsType>(`posts/${postId}/comments`)
    },
    getSelectedUsersPosts(data: string){
        return instance.get<PostsType>(`posts?${data}`)
    },
}


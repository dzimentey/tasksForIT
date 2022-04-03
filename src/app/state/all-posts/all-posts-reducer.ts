import {PostsType} from "./post-type";
import {ActionsType} from "./actions";


export const allPostsReducer = (state: PostsType = [], action: ActionsType): PostsType => {
    switch (action.type) {
        case "ALL-POSTS/GET-POSTS":
            return [...action.posts]
        case "ALL-POSTS/GET-SELECTED-USERS-POSTS":
            return [...action.posts]
        default:
            return state
    }
}








import {CommentsType} from "./comments-type";
import {ActionsType} from "./actions";

export const commentsReducer = (state: CommentsType = [], action: ActionsType): CommentsType => {
    switch (action.type) {
        case "COMMENTS/GET-COMMENTS" :
            return state.every(e => e.postId !== action.comments[0].postId) ? [...action.comments, ...state] : [...state]
        case "COMMENTS/FILTER-COMMENTS":
            return [...state.filter(c => c.postId !== action.postId)]
        default:
            return state
    }
}



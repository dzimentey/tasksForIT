import React from "react";
import {PostType} from "../state/all-posts/post-type";
import {CommentsType} from "../state/comments/comments-type";

type CommentsPropsType = {
    comments: CommentsType
    post: PostType
}

export const Comments = ({comments, post,}:CommentsPropsType) => {
    return(
        <div className={'comments'}>
            {comments.map(com => com.postId === post.id
                && <div key={com.id}> <p>{com.id} {com.body}</p><hr/></div>
            )}
        </div>
    )
}

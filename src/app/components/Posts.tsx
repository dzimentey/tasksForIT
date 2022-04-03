import React, {ChangeEvent} from "react";
import {Comments} from "./Comments";
import {PostsType} from "../state/all-posts/post-type";
import {CommentsType} from "../state/comments/comments-type";

type PostsPropsType = {
    allPosts: PostsType
    getCommentsForPost: (postId: number) => void
    hideComments: (postId: number) => void
    comments: CommentsType
}

export const Posts = (props: PostsPropsType) => {
    const {allPosts, getCommentsForPost, hideComments, comments} = props
    return (
        <div className={'postsBlock'}>
            {allPosts.map(post => {
                const onClickHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    const isChecked = e.currentTarget.checked
                    isChecked ? getCommentsForPost(post.id) : hideComments(post.id)
                }
                return (
                    <div key={post.id}>
                        <li>{post.title}</li>
                        <div className={'postBody'}>
                            {post.body}
                        </div>
                        <label className="btn">
                            <input type={'checkbox'} onChange={onClickHandler}/>
                            <span>expand</span>
                        </label>
                        <Comments comments={comments} post={post}/>
                    </div>
                )
            })}
        </div>
    )
}


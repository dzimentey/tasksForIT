import React, {ChangeEvent} from "react";
import {UsersType} from "../state/users/users-type";

type FilterPropsType = {
    users: UsersType
    getPostsByUser: (id: number, isChecked: boolean) => void
}

export const Filer = ({users, getPostsByUser,}: FilterPropsType) => {
    return (
        <div className={'selectBlock'}>
            <div className={'selectTitle'}>Select users to view their posts</div>
            <div className={'selectBody'}>
                {users.map(user => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        const newIsChecked = e.currentTarget.checked
                        getPostsByUser(user.id, newIsChecked)
                    }
                    return (
                        <div key={user.id}>
                            <input type="checkbox" onChange={onChangeHandler} checked={user.isChecked}/>
                            {user.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


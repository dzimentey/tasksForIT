type UserType = {
    id: number
    name: string
    username: string
    email: string
    isChecked: boolean
}

export type UsersType = Array<UserType>

export type ActionType = {
    type: 'GET-USERS',
    dispatch: (func: any) => {}
}
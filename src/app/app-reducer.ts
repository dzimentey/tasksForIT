
const initialState = {
    isLoading: false
}
type InitStateType = typeof initialState
type ActionsType = ReturnType<typeof setStatusAC>

export const appReducer = (state:InitStateType  = initialState, action: ActionsType): InitStateType => {
    switch (action.type) {
        case 'APP/SET-IS-LOADING':
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const setStatusAC = (isLoading: boolean) => ({type: 'APP/SET-IS-LOADING', isLoading}) as const

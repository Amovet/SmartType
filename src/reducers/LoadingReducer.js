export const LOADING = 'LOADING'
export const FINISHED = 'FINISHED'
export const SET_TEXT = 'SET_TEXT'

export function loadingReducer (state,action){
    switch (action.type){
        case LOADING:
            return {
                ...state,
                isLoading:true
            };
        case FINISHED:
            return {
                ...state,
                isLoading: false
            };
        case SET_TEXT:
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
}

export const setIsLoading=()=>{
    return {
        type:LOADING
    }
}
export const setIsFinished=()=>{
    return {type:FINISHED}
}
export const setText=(text)=>{
    return {
        type:SET_TEXT,
        text
    }
}
import {loadingReducer, setIsFinished, setIsLoading, setText} from "../reducers/LoadingReducer";
import {useEffect, useReducer} from "react";
import {getUrlByType} from "../utils/functions";

const initialState = {
    isLoading:true,
    text:' '
}

export const useGetText = (type) => {
    const [state, dispatch] = useReducer(loadingReducer, initialState);

    useEffect(() => {
            const url = getUrlByType(type)
            dispatch(setIsLoading());
            fetch(url)
                .then((response)=>response.json())
                .then((text)=>{
                    dispatch(setIsFinished());
                    dispatch(setText(text))
                    }
                )
            dispatch(setIsFinished());

    }, [type]);
    return {text:state.text, isLoading: state.isLoading}
}









import { useReducer } from "react"
import { initialState, reducerTralator } from "./reducer"
import { FromLenguage, Lenguage } from "./type"


export const useTraslator = () => {
    const [state, dispatch] = useReducer(reducerTralator, initialState)

    const interchangeLenguage = () => {
        dispatch({type:'INTERCHANGE'})
    }
    const setFromLenguage = (payload: FromLenguage) => {
        dispatch({type:'SET_FROM_LENGUAGE', payload})
    }
    const setToLenguage = (payload: Lenguage) => {
        dispatch({type:'SET_TO_LENGUAGE', payload})
    }

    const setText = (payload: string) => {
        dispatch({type:'SET_TEXT', payload})
    }
    const setResut = (payload: string) => {
        dispatch({type: 'SET_RESULT', payload})
    }


    return {
        //STATE
        state,
        ...state,

        //FUNCIONES
        interchangeLenguage,
        setFromLenguage,
        setToLenguage,
        setText,
        setResut
    }

}

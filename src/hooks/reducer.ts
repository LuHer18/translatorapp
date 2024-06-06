import { AUTOLENGUAGE } from "../constants";
import { ActionTraslator, State } from "./type";

export const initialState: State = {
  fromLenguage: 'auto',
  toLenguage: 'en',
  text: '',
  result: '',
  isLoading: false,
}

export const reducerTralator = (state: State, action: ActionTraslator) => {
  const { type } = action;

  if (type === 'INTERCHANGE') {
    if( state.fromLenguage === AUTOLENGUAGE){
      return state
    }

    return {
      ...state,
      fromLenguage: state.toLenguage,
      toLenguage: state.fromLenguage
    }
  }
  if (type === 'SET_FROM_LENGUAGE') {
    if(state.fromLenguage === action.payload) return state
    const loading = state.text !== ''
    return {
      ...state,
      fromLenguage: action.payload,
      isLoading: loading
    }
  }
  if (type === 'SET_TO_LENGUAGE') {
    if(state.toLenguage === action.payload) return state
    const loading = state.text !== ''

    return {
      ...state,
      toLenguage: action.payload,
      isLoading: loading
    }
  }
  if (type === 'SET_TEXT') {
    return {
      ...state,
      text: action.payload,
      isLoading: true
    }
  }
  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: action.payload,
      isLoading: false
    }
  }

  return {
    ...state
  }
}

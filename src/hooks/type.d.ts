import { AUTOLENGUAGE, SUPPORTED_LANGUAGES } from "../constants";

export type Lenguage = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLenguage = typeof AUTOLENGUAGE;

export type fromLenguage = Lenguage | AutoLenguage;


export interface State {
    fromLenguage: string;
    toLenguage: string;
    text: string;
    result: string;
    isLoading: boolean;
}

export type ActionTraslator = 
    | {type: 'SET_FROM_LENGUAGE', payload: string}
    | {type: 'INTERCHANGE'}
    | {type: 'SET_TO_LENGUAGE', payload: string}
    | {type: 'SET_TEXT', payload: string}
    | {type: 'SET_RESULT', payload: string}

   
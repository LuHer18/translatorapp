import { AUTOLENGUAGE, SUPPORTED_LANGUAGES } from "../constants";

export type Lenguage = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLenguage = typeof AUTOLENGUAGE;

export type FromLenguage = Lenguage | AutoLenguage;


export interface State {
    fromLenguage: FromLenguage;
    toLenguage: Lenguage;
    text: string;
    result: string;
    isLoading: boolean;
}

export type ActionTraslator = 
    | {type: 'SET_FROM_LENGUAGE', payload: FromLenguage}
    | {type: 'INTERCHANGE'}
    | {type: 'SET_TO_LENGUAGE', payload: Lenguage}
    | {type: 'SET_TEXT', payload: string}
    | {type: 'SET_RESULT', payload: string}

export enum SectionType {
    From = 'from',
    To = 'to'
}
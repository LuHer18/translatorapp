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

   
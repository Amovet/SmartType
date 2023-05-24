import {ENG_DOCUMENTATION, ENG_LITERATURE, ENG_RANDOM, Symbols} from "./constants";

export const checkUpperCase = (string) => /^[A-Z]*$/.test(string)

export const getUrlByType = (type) => {
    switch (type){
        case ENG_LITERATURE:
            return 'https://smart-type-api.vercel.app/eng/literature';
        case ENG_RANDOM:
            return 'https://smart-type-api.vercel.app/eng/random';
        case ENG_DOCUMENTATION:
            return 'https://smart-type-api.vercel.app/eng/documentation';
        default:
            return 'https://smart-type-api.vercel.app/eng/literature';
    }
}

export const selectAnotherType = (type) => {
    switch (type){
        case ENG_LITERATURE:
            return ENG_DOCUMENTATION;
        case ENG_RANDOM:
            return ENG_LITERATURE;
        case ENG_DOCUMENTATION:
            return ENG_LITERATURE;
        default:
            return ENG_LITERATURE;
    }
}

export const checkSymbol = (symbol) => {
    const isSymbolValid =
        Symbols.LETTERS.includes(symbol) ||
        Symbols.OTHER_SYMBOLS.includes(symbol);
    return isSymbolValid;
};

export const getSpeedIndo = (time,position) => {
    if(position<4||time==0){
        return '--';
    }else{
        return Math.ceil((60/time)*position);
    }
};
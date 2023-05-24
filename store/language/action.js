const MY_LANG = 'MY_LANG';
const SET_LANG = 'SET_LANG';


export const myLang = (lang) => {
    return {
        type: MY_LANG,
        payload: lang
    }
};


export const setLang = (lang) => {
    return {
        type: SET_LANG,
        payload: lang
    }
};

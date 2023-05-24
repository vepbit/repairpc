export const myLangReducer = (state = false, action) => {
    switch (action.type) {
        case 'MY_LANG':
            return state = action.payload;
        default:
            return state;
    }
};

export const setMyLangReducer = (state = true, action) => {
    switch (action.type) {
        case 'SET_LANG':
            return state = action.payload;
        default:
            return state;
    }
};


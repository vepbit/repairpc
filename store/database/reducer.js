const myFireBaseReducer = (state = false, action) => {
    switch (action.type) {
        case 'GET_BASE':
            return state = action.payload;
        default:
            return false;

    }
};
export default myFireBaseReducer;

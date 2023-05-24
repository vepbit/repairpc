
import { combineReducers } from 'redux';
import { firebaseReducer } from "react-redux-firebase";
import { myLangReducer, setMyLangReducer } from './language/reducer';

const allReducers = combineReducers({
    base: firebaseReducer,
    myLang: myLangReducer,
    setLang: setMyLangReducer
});

export default allReducers;

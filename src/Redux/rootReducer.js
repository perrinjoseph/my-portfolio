import navReducer from './navReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    toggleNav: navReducer,
})
export default rootReducer;
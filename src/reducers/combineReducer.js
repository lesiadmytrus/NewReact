import {combineReducers} from 'redux';
import todos from './todosReducer';
import visibilityFilter from './filterReducer';

export default combineReducers({
    todos,
    visibilityFilter,
});
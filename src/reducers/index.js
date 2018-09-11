import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commentReducer from './comments';
import postReducer from './posts';

export default combineReducers({
	posts: postReducer,
	comments: commentReducer,
	routing: routerReducer
});

import type from './types';
import posts from '../data/posts';

export const incrementLikes = (index) => (dispatch) => {
	dispatch({
		type: type.INCREMENT_LIKES,
		payload: index
	});
};

export const fetchPosts = () => (dispatch) => {
	dispatch({
		type: type.FETCH_POSTS,
		payload: posts
	});
};

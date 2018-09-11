import type from './types';
import comments from '../data/comments';

export const addComment = (postId, author, comment) => (dispatch) => {
	dispatch({
		type: type.ADD_COMMENT,
		payload: {
			postId,
			author,
			comment
		}
	});
};

export const fetchComments = () => (dispatch) => {
	dispatch({
		type: type.FETCH_COMMENTS,
		payload: comments
	});
};

export const removeComment = (postId, i) => (dispatch) => {
	dispatch({
		type: type.REMOVE_COMMENT,
		payload: {
			i,
			postId
		}
	});
};

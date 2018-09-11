import type from '../actions/types';

const initialState = {
	postComments: {},
	postComment: {}
};

const comment = (state = initialState, action) => {
	switch (action.type) {
		case type.FETCH_COMMENTS:
			return {
				postComments: action.payload
			};
		case type.ADD_COMMENT:
			return {
				...state,
				postComment: {
					user: action.payload.author,
					text: action.payload.comment
				}
			};
		case type.REMOVE_COMMENT:
			const newListComment = [
				...state.postComments[action.payload.postId].slice(0, action.payload.i),
				...state.postComments[action.payload.postId].slice(action.payload.i + 1)
			];
			const newComments = { ...state.postComments };
			newComments[action.payload.postId] = newListComment;
			return {
				postComments: newComments
			};
		default:
			return state;
	}
};

export default comment;

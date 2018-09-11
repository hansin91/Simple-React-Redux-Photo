import type from '../actions/types';

const initialState = {
	items: [],
	item: {}
};

const posts = (state = initialState, action) => {
	switch (action.type) {
		case type.FETCH_POSTS:
			return {
				...state,
				items: action.payload
			};
		case type.INCREMENT_LIKES:
			const newPosts = [
				...state.items.slice(0, action.payload),
				{ ...state.items[action.payload], likes: state.items[action.payload].likes + 1 },
				...state.items.slice(action.payload + 1)
			];
			return {
				...state,
				items: newPosts
			};
		default:
			return state;
	}
};

export default posts;

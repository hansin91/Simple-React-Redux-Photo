import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
	const postId = props.match.params.postId;
	const i = props.posts.findIndex((post) => post.code === postId);
	const post = props.posts[i];
	const postComments = props.comments[postId] || [];
	if (post !== undefined) {
		return (
			<div className="single-photo">
				<Photo i={i} photo={post} {...props} />
				<Comments postComments={postComments} {...props} />
			</div>
		);
	}
	return <div className="single-photo" />;
};

export default Single;

import React from 'react';
import Photo from './Photo';

const PhotoGrid = (props) => {
	return (
		<div className="photo-grid">
			{props.posts.map((post, index) => <Photo i={index} photo={post} key={index} {...props} />)}
		</div>
	);
};

export default PhotoGrid;

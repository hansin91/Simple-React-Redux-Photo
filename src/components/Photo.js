import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { incrementLikes } from '../actions/post';
import { withRouter } from 'react-router-dom';

class Photo extends Component {
	render() {
		const { code, caption, likes, display_src } = this.props.photo;
		const { i } = this.props;
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap">
					<Link to={`/view/${code}`}>
						<img src={display_src} alt={caption} className="grid-photo" />
					</Link>
					<ReactCSSTransitionGroup
						transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}
					>
						<span key={likes} className="likes-heart">
							{likes}
						</span>
					</ReactCSSTransitionGroup>
					<figcaption>
						<p>{caption}</p>
						<div className="control-buttons">
							<button onClick={() => this.props.incrementLikes(i)} className="likes">
								&hearts; {likes}
							</button>
							<Link className="button" to={`/view/${code}`}>
								<span className="comment-count">
									<span className="speech-bubble" />
									{this.props.comments[code] !== undefined ? this.props.comments[code].length : 0}
								</span>
							</Link>
						</div>
					</figcaption>
				</div>
			</figure>
		);
	}
}

Photo.propTypes = {
	incrementLikes: PropTypes.func.isRequired
};

export default withRouter(connect(null, { incrementLikes })(Photo));

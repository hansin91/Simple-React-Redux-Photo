import React, { Component } from 'react';
import { addComment, removeComment } from '../actions/comment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.newComment) {
			this.props.postComments.push(nextProps.newComment);
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const postId = this.props.match.params.postId;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	};

	render() {
		const postItems = this.props.postComments.map((comment, i) => {
			return (
				<div className="comment" key={i}>
					<p>
						<strong>{comment.user}</strong>
						{comment.text}
						<button
							onClick={() => this.props.removeComment(this.props.match.params.postId, i)}
							className="remove-comment"
						>
							&times;
						</button>
					</p>
				</div>
			);
		});
		return (
			<div className="comment">
				{postItems}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author" />
					<input type="text" ref="comment" placeholder="comment" />
					<input type="submit" hidden />
				</form>
			</div>
		);
	}
}

Comments.propTypes = {
	addComment: PropTypes.func.isRequired,
	removeComment: PropTypes.func.isRequired,
	newComment: PropTypes.object
};

const mapStateToProps = (state) => {
	return {
		comments: state.comments.postComments,
		newComment: state.comments.postComment
	};
};

export default withRouter(connect(mapStateToProps, { addComment, removeComment })(Comments));

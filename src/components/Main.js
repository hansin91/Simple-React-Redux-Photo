import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import Single from './Single';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comment';
import { fetchPosts } from '../actions/post';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Main extends Component {
	componentDidMount() {
		this.props.fetchPosts();
		this.props.fetchComments();
	}

	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<PhotoGrid comments={this.props.comments} posts={this.props.posts} {...props} />
						)}
					/>
					<Route
						path="/view/:postId"
						render={(props) => (
							<Single comments={this.props.comments} posts={this.props.posts} {...props} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

Main.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
	fetchComments: PropTypes.func.isRequired,
	comments: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	posts: state.posts.items,
	comments: state.comments.postComments
});

export default withRouter(connect(mapStateToProps, { fetchPosts, fetchComments })(Main));

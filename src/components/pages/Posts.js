import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../store/actions';
import PostsList from '../posts/postsList/PostsList';

class Posts extends Component {
  componentDidMount() {
    const { onFetchPosts } = this.props;
    onFetchPosts();
  }

  render() {
    const { loading, posts } = this.props;
    return (
      <>
        <h2> Latest Blog Posts</h2>
        <Link to="/posts/new" className="btn">
          Add New
        </Link>
        {loading ? <p>loading..</p> : <PostsList posts={posts} />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading
  };
};

const mapDispathToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actions.postsFetch())
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Posts);

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ).isRequired,
  onFetchPosts: PropTypes.func.isRequired
};

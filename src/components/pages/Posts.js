import React, { Component } from 'react'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'
import PostsList from '../posts/postsList/PostsList'

class Posts extends Component {
  componentDidMount() {
    this.props.onFetchPosts()
  }

  render() {
    return (
      <>
        <h2> Latest Blog Posts</h2>
        <PostsList posts={this.props.posts} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
  }
}

const mapDispathToProps = dispatch => {
  return {
    onFetchPosts: () => dispatch(actions.postsFetch()),
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(Posts)

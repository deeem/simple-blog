import React, { Component } from 'react'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

class Posts extends Component {
  componentDidMount() {
    this.props.onFetchPosts()
  }

  render() {
    return <h1> Posts page </h1>
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

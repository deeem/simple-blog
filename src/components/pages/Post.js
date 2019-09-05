import React, { Component } from 'react'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

class Post extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
  }

  render() {
    const { id } = this.props.match.params
    const { posts } = this.props
    const post = posts.find(item => item.id === +id)

    return (
      <>
        {post && (
          <>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </>
        )}

        <a href="/">Back to Posts List</a>
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

export default connect(mapStateToProps)(Post)

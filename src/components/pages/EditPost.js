import React, { Component } from 'react'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'
import PostForm from '../../components/posts/postForm/PostForm'
import axios from '../../api/axios-posts'

class EditPost extends Component {
  onSubmit = ({ title, body }) => {
    const { id } = this.props.match.params
    this.publish({ id, title, body })
  }

  publish = async ({ id, title, body }) => {
    const res = await axios.put(`/posts/${id}`, { title, body })

    this.props.history.push(`/`)
  }

  render() {
    const { id } = this.props.match.params
    const { posts } = this.props
    const post = posts.find(item => item.id === +id)

    return (
      <>
        <h3>Edit Post</h3>
        <PostForm
          title={post.title}
          body={post.body}
          onSubmit={this.onSubmit}
        />

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

export default connect(mapStateToProps)(EditPost)

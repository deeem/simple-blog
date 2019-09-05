import React, { Component } from 'react'

class Post extends Component {
  render() {
    const { id } = this.props.match.params

    return <h1>View Post ({id})</h1>
  }
}

export default Post

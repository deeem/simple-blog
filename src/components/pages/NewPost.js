import React, { Component } from 'react';
import PostForm from '../posts/postForm/PostForm';
import axios from '../../api/axios-posts';

class NewPost extends Component {
  onSubmit = ({ title, body }) => {
    this.publish({ title, body });
  };

  publish = async ({ id, title, body }) => {
    await axios.post(`/posts/`, { title, body });

    this.props.history.push(`/`);
  };

  render() {
    return (
      <>
        <h3>Compose New Post</h3>
        <PostForm title="" body="" onSubmit={this.onSubmit} />

        <a href="/">Back to Posts List</a>
      </>
    );
  }
}

export default NewPost;

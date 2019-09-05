import React, { Component } from 'react';
import axios from '../../api/axios-posts';
import CommentsForm from '../posts/comments/form/CommentsForm';
import CommentsList from '../posts/comments/commentsList/commentsList';

class Post extends Component {
  state = {
    title: '',
    body: '',
    comments: [],
    comment_body: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.fetch(id);
  }

  fetch = async id => {
    const res = await axios.get(`posts/${id}?_embed=comments`);
    this.setState({
      title: res.data.title,
      body: res.data.body,
      comments: res.data.comments
    });
  };

  publishComment = async text => {
    const { id } = this.props.match.params;
    const res = await axios.post('/comments', {
      postId: id,
      body: text
    });

    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: res.data.id,
          postId: id,
          body: text
        }
      ]
    });
  };

  onCommentSubmit = text => {
    this.publishComment(text);
  };

  render() {
    const { title, body, comments } = this.state;

    return (
      <>
        {title && (
          <>
            <h3>{title}</h3>
            <p>{body}</p>
          </>
        )}
        <hr />
        <h3>Comments</h3>
        {comments && <CommentsList comments={comments} />}
        <h5>Leave Your Comment</h5>
        <CommentsForm onSubmit={this.onCommentSubmit} />

        <a href="/">Back to Posts List</a>
      </>
    );
  }
}

export default Post;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../api/axios-posts';

class DeletePost extends Component {
  onDelete = e => {
    const { id } = this.props.match.params;
    this.deletePost(id);
  };

  onCancel = e => {
    this.props.history.push(`/`);
  };

  deletePost = async id => {
    await axios.delete(`/posts/${id}`);
    this.props.history.push(`/`);
  };

  render() {
    const { id } = this.props.match.params;
    const { posts } = this.props;
    const post = posts.find(item => item.id === +id);
    return (
      <>
        <h5>Are You Shure Want to Delete this Post?</h5>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className="delete-form-actions">
          <button className="btn" onClick={this.onCancel}>
            Cancel
          </button>
          <button className="btn btn--danger" onClick={this.onDelete}>
            Delete
          </button>
        </div>
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

export default connect(mapStateToProps)(DeletePost);

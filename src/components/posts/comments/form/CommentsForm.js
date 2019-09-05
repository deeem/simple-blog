import React, { Component } from 'react';
import './CommentsForm.css';
import PropTypes from 'prop-types';

class CommentsForm extends Component {
  state = {
    comment: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onPublish = e => {
    e.preventDefault();
    this.setState({ comment: '' });
    this.props.onSubmit(this.state.comment);
  };

  render() {
    const { text } = this.state;
    return (
      <form className="comment-form">
        <textarea
          className="comment-form__textarea"
          name="comment"
          placeholder="Write Your Comment Here..."
          value={text}
          onChange={this.onChange}
        />
        <button className="comment-form__submit" onClick={this.onPublish}>
          Publish Comment
        </button>
      </form>
    );
  }
}

export default CommentsForm;

CommentsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

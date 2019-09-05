import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostForm.css';

class PostForm extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    const { title, body } = this.props;
    this.setState({ title, body });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    this.props.onSubmit({ title, body });
  };

  render() {
    const { title, body } = this.state;
    return (
      <>
        <div className="post-form">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={this.onChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="body">Body</label>
            <textarea
              type="text"
              name="body"
              id="body"
              placeholder="Body"
              value={body}
              onChange={this.onChange}
            />
          </div>
          <div className="form-control">
            <button className="post-form__submit" onClick={this.onSubmit}>
              Publish
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default PostForm;

PostForm.defaultProps = {
  title: '',
  body: ''
};

PostForm.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

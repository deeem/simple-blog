import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './PostsList.css';

const PostsList = ({ posts }) => {
  return (
    <>
      {posts.map(item => (
        <div className="postlist-item" key={item.id}>
          <h4 className="postlist-item__title">{item.title}</h4>
          <p className="postlist-item__body">{item.body}</p>
          <div className="postlist-item__links">
            <div className="postlist-item__link-item">
              <div className="postlist-item__view-icon" />
              <Link to={`/posts/${item.id}`}>Read Post</Link>
            </div>
            <div className="postlist-item__link-item">
              <div className="postlist-item__edit-icon" />
              <Link to={`/posts/edit/${item.id}`}>Edit Post</Link>
            </div>
            <div className="postlist-item__link-item">
              <div className="postlist-item__delete-icon" />
              <Link to={`/posts/delete/${item.id}`}>Delete Post</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsList;

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      id: PropTypes.number
    })
  ).isRequired
};

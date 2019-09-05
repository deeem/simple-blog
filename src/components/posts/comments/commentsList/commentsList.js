import React from 'react';
import PropTypes from 'prop-types';
import './commentsList.css';

const CommentsList = ({ comments }) => {
  return (
    <>
      <ul className="comments-list">
        {comments.map(item => (
          <li key={item.id} className="comments-list__item">
            {item.body}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentsList;

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

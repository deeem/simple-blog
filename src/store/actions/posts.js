import * as actionTypes from './actionTypes';
import axios from '../../api/axios-posts';

export const postsFetchStart = () => {
  return {
    type: actionTypes.POSTS_FETCH_START
  };
};

export const postsFetchSuccess = posts => {
  return {
    type: actionTypes.POSTS_FETCH_SUCCESS,
    posts
  };
};

export const postsFetchFail = error => {
  return {
    type: actionTypes.POSTS_FETCH_FAIL,
    error
  };
};

export const postsFetch = () => {
  return dispatch => {
    dispatch(postsFetchStart());

    axios
      .get('/posts')
      .then(res => {
        dispatch(postsFetchSuccess(res.data));
      })
      .catch(() => {
        dispatch(postsFetchFail());
      });
  };
};

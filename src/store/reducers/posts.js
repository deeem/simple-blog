import * as actionTypes from '../actions/actionTypes';

const initialState = {
  posts: [],
  loading: false,
  error: false
};

const postsFetchStart = state => {
  return {
    ...state,
    loading: true
  };
};

const postsFetchSuccess = (state, action) => {
  return {
    ...state,
    posts: action.posts,
    loading: false
  };
};

const postsFetchFail = (state, action) => {
  return {
    ...state,
    loading: false,
    error: action.error
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POSTS_FETCH_START:
      return postsFetchStart(state, action);
    case actionTypes.POSTS_FETCH_SUCCESS:
      return postsFetchSuccess(state, action);
    case actionTypes.POSTS_FETCH_FAIL:
      return postsFetchFail(state, action);
    default:
      return state;
  }
};

export default reducer;

import actionTypes from '../constants/actionTypes';

function homeReducer(state = { isLoading: true, movies: [] }, action) {
  switch (action.type) {
    case actionTypes.GET_MOVIES:
      return {
        ...state,
        isLoading: action.isLoading,
        movies: action.movies,
      };
    default:
      return state;
  }
}

export default homeReducer;


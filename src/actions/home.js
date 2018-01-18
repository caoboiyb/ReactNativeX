import actionTypes from '../constants/actionTypes';
import moviesService from '../services/moviesAPI';

function getMoviesSuccess(movies) {
  return {
    type: actionTypes.GET_MOVIES,
    isLoading: false,
    movies,
  };
}

function getMovies() {
  return (dispatch) => {
    moviesService.getMovies().then((movies) => {
      dispatch(getMoviesSuccess(movies));
    });
  };
}

export default {
  getMovies,
};


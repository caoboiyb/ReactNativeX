import actionTypes from '../constants/actionTypes';
import moviesService from '../services/moviesAPI';
import realm from '../database';

function getMoviesSuccess(movies) {
  return {
    type: actionTypes.GET_MOVIES,
    isLoading: false,
    movies,
  };
}

function getMovies() {
  return (dispatch) => {
    const moviesData = realm.objects('Movie');
    if (moviesData.length === 0) {
      moviesService.getMovies().then((movies) => {
        realm.write(() => {
          movies.map(async (movie) => {
            realm.create('Movie', {
              title: movie.title,
              releaseYear: movie.releaseYear,
            });
          });
        });
        dispatch(getMoviesSuccess(movies));
      });
    } else {
      dispatch(getMoviesSuccess(Array.from(moviesData)));
    }
  };
}

export default {
  getMovies,
};

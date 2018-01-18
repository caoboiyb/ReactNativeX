/* global fetch:false */

function getMovies() {
  return fetch('https://facebook.github.io/react-native/movies.json', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response.text);
      }
      return response.json();
    })
    .then(responseJson => responseJson.movies)
    .catch((error) => {
      console.error(error); // eslint-disable-line
    });
}

export default { getMovies };

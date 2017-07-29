import axios from 'axios';
import {
  mainMovieEndpoint,
  movieGenreEndpoint,
  trendingMoviesEndpoint,
  movieDetailsEndpoint,
  trailersEndpoint
} from '../config/endpoints';

export function fetchMainMovie () {
  return function (dispatch) {
    dispatch({type: 'FETCHING_MOVIE'});
    axios.get(mainMovieEndpoint)
      .then(function(result){
        const numberOneTrending = result.data.results[0];
        dispatch({
          type: 'FETCHING_MAIN_MOVIE_SUCCESS',
          movie: numberOneTrending
        })
      })
      .catch( (err) => dispatch({
        type: 'FETCHING_MAIN_MOVIE_FAILURE',
        error: err
      }) )
  }
}

export function fetchMovieByGenre (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_DOCUMENTARIES'})
    axios.get(movieGenreEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_DOCUMENTARIES_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_DOCUMENTARIES_FAILURE',
        error: err
      }))
  }
}


export function fetchComedies (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_COMEDIES'})
    axios.get(movieGenreEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_COMEDIES_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_COMEDIES_FAILURE',
        error: err
      }))
  }
}

export function fetchDramas (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_DRAMAS'})
    axios.get(movieGenreEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_DRAMAS_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_DRAMAS_FAILURE',
        error: err
      }))
  }
}

export function fetchHorror (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_HORROR'})
    axios.get(movieGenreEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_HORROR_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_HORROR_FAILURE',
        error: err
      }))
  }
}

export function fetchRomance (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_ROMANCE'})
    axios.get(movieGenreEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_ROMANCE_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_ROMANCE_FAILURE',
        error: err
      }))
  }
}

export function fetchScifi (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_SCIFI'})
    axios.get(movieGenreEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_SCIFI_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_SCIFI_FAILURE',
        error: err
      }))
  }
}

export function fetchThriller (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_THRILLER'})
    axios.get(movieGenreEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_THRILLER_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_THRILLER_FAILURE',
        error: err
      }))
  }
}

export function fetchTrending () {
  return function (dispatch) {
    dispatch({type: 'FETCHING_TRENDING'})
    axios.get(trendingMoviesEndpoint)
      .then(function (result) {
        dispatch({
          type: 'FETCHING_TRENDING_SUCCESS',
          movies: result.data.results
        })
      })
      .catch((err) => dispatch({
        type: 'FETCHING_TRENDING_FAILURE',
        error: err
      }))
  }
}

export function fetchSingleFilm (id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_SINGLE_FILM'});
    axios.get(movieDetailsEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_SINGLE_FILM_SUCCESS',
          film: result.data,
        });
        dispatch(fetchTrailers(id));
      })
      .catch( (err) => dispatch({
        type: 'FETCHING_SINGLE_FILM_FAILURE',
        error: err
      }))
  }
}

function fetchTrailers(id) {
  return function (dispatch) {
    dispatch({type: 'FETCHING_TRAILERS'});
    axios.get(trailersEndpoint(id))
      .then(function (result) {
        dispatch({
          type: 'FETCHING_TRAILERS_SUCCESS',
          trailers: [result.data.results[0], result.data.results[1]]
        })
      })
  }
}

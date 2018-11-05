import axios from 'axios';
import { closeSearch } from './getSearchActiom';
import { clearInput } from './searchStateAction';

export const getMovieDetails = (moviedetails) => ({
    type: 'MOVIE_DETAILS',
    moviedetails,
})

function fetchMovieDetails(movieid) {
   return Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US&page=1&region=UA`),
        axios.get(`https://api.themoviedb.org/3/movie/${movieid}/similar?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US&page=1`),
        axios.get(`https://api.themoviedb.org/3/movie/${movieid}/videos?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US`)
    ])
}

export const loaderRun = () => ({
    type: 'LOADER_RUN',
})

export const movieDetailsAsync = (movieid) => dispatch => {
    
    fetchMovieDetails(movieid)
    .then(data => {
        let [info, similar, video] = data;
        let description = info.data;
        let trailers = video.data.results;
        let recommendation = similar.data.results;
        let newObj = {
            ...description,
            trailers,
            recommendation
        };
        dispatch(getMovieDetails(newObj))    

    })
    .then(()=> dispatch(loaderRun()))
    .then(() => dispatch(closeSearch()))
    .then(() => dispatch(clearInput()))
    .catch(error => console.log(error));
}
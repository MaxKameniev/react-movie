import axios from 'axios';

export const getAddToFav = (addtofav) => ({
    type: 'ADD_TO_FAV',
    addtofav,
})

function fetchAddToFav(event) {
    let id = event.target.dataset.movieid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US`)
}

export const addToFavAsync = (event) => dispatch => {
    fetchAddToFav(event)
    .then(data => dispatch(getAddToFav(data.data)))
    .catch(error => console.log(error))
}

export const getFromLocalFav = () => ({
    type: 'GET_FROM_LOCAL_FAV',
})

export const deleteFromFav = (event) => ({
    type: 'DELETE_FROM_FAV',
    id: event.target.dataset.movieid,
})
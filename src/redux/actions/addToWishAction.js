import axios from 'axios';

export const getAddToWish = (addtowish) => ({
    type: 'ADD_TO_WISH',
    addtowish,
})

function fetchAddToWish(event) {
    let id = event.target.dataset.movieid;
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US`)
}

export const addToWishAsync = (event) => dispatch => {
    fetchAddToWish(event)
    .then(data => dispatch(getAddToWish(data.data)))
    .catch(error => console.log(error))
}

export const getFromLocalWish = () => ({
    type: 'GET_FROM_LOCAL_WISH',
})

export const deleteFromWish = (event) => ({
    type: 'DELETE_FROM_WISH',
    id: event.target.dataset.movieid,
})
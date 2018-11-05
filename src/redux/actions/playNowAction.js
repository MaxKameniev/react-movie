import axios from 'axios';

export const getPlayNow = (playnow) => ({
    type: 'GET_PLAYNOW',
    playnow,
})

function fetchPlayNow() {
    return Promise.all([ 
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US&page=1&region=UA'),
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US&page=2&region=UA')
])
}

export const playNowAsync = () => dispatch => {
    fetchPlayNow()
    .then(data => dispatch(getPlayNow(data)))
    .catch(error => console.log(error));
}
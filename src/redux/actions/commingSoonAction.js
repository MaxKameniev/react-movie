import axios from 'axios';

export const getCommingSoon = (commingsoon) => ({
    type: 'GET_COMMINGSOON',
    commingsoon,
})

function fetchCommingSoon(){
    return axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US&page=1&region=UA')
}

export const commingSoonAsync = () => dispatch => {
    fetchCommingSoon()
    .then(data => dispatch(getCommingSoon(data.data.results)))
    .catch(error => console.log(error));
}
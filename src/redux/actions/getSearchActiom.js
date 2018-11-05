import axios from 'axios';


export const searchAction = (data) => ({
    type: 'SEARCH_ACTION',
    searchresult: data,
})

export const closeSearch = () => ({
    type: 'CLOSE_SEARCH',
})

export const testSearch = (var1) => {
// console.log(var1);
}

function fetchSearch(query) {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=52fea77a2ee5a2cc94b5e4da75b07ddb&language=en-US&query=${query}&page=1&include_adult=true`)
}

export const searchResult = (query) => dispatch => {
    if(query.length >= 4){
    fetchSearch(query)
    .then(data => dispatch(searchAction(data.data.results)))
    .catch(error => console.log(error))
     }
     else {
        return 
    }
}




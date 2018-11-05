export default function movieDetailsObj (state = {}, action){
    switch (action.type) {
        case 'MOVIE_DETAILS':
            return action.moviedetails;
        default:
            return state;
    }
}
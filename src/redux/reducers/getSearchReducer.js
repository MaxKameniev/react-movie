export default function searchArr (state = [], action){
    switch (action.type) {
        case 'SEARCH_ACTION':
            return action.searchresult;
        case 'CLOSE_SEARCH':
            return [];
        default:
            return state;
    }
}
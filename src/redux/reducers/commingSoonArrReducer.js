export default function commingSoonArr (state = [], action) {
    switch (action.type){
        case 'GET_COMMINGSOON':
        return [...action.commingsoon]
        default:
        return state;
    }
}
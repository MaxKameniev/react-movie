export default function searchInState (state='', action) {
    switch (action.type) {
        case 'INPUT_SEARCH':
            return action.searchstring;
        case 'CLEAR_INPUT':
            return '';
        default:
            return state;
    }
}
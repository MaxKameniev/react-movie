export default function isLoading (state = true, action) {
    switch (action.type) {
        case 'LOADER_RUN':
            return false;
        default:
            return state;
    }
}
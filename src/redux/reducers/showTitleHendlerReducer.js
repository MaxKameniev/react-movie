export default function showTitleHendler (state = false, action) {
    switch (action.type) {
        case 'CHANGE_SHOW_MENU':
            return !state;
        default:
            return state;
    }
}
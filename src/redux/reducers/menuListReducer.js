export default function menuList (state = [], action){
    switch (action.type) {
        case 'SHOW_MENU_LIST':
        let res = [
            {name: 'Now playing', icon: 'fas fa-play', url: '/'},
            {name: 'Coming soon', icon: 'fas fa-calendar-alt', url: '/upcoming'},
            {name: 'Favorites', icon: 'fas fa-star', url: '/favorites'},
            {name: 'Wish list', icon: 'fas fa-heart', url: '/wish'},
            // {name: 'Chats', icon: 'fas fa-comment', url: '/chats'}
        ]
            return res;
        default:
            return state;
    }
}
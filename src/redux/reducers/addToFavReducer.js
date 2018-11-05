export default function addToFavArr(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_FAV':
            let wasAddToFav = JSON.parse(localStorage.getItem('favorite'));
            console.log(wasAddToFav);
            if (wasAddToFav) {
                if (wasAddToFav.map(el => el.id).includes(action.addtofav.id)) {
                    return wasAddToFav;
                } else {
                    wasAddToFav.push(action.addtofav)
                }
            } else {
                wasAddToFav = [];
                wasAddToFav.push(action.addtofav);
            }
            localStorage.setItem('favorite', JSON.stringify(wasAddToFav));
            return wasAddToFav;
        case 'GET_FROM_LOCAL_FAV':
            return JSON.parse(localStorage.getItem('favorite'));
        case 'DELETE_FROM_FAV':
            let wasDeletedFromFav = JSON.parse(localStorage.getItem('favorite')).filter(a => a.id !== +action.id);
            localStorage.setItem('favorite', JSON.stringify(wasDeletedFromFav));
            return wasDeletedFromFav;
        default:
            return state;
    }
}
export default function addToWishArr(state = [], action) {
    switch (action.type) {
        case 'ADD_TO_WISH':
            let wasAddToWish = JSON.parse(localStorage.getItem('wishlist'));
            if (wasAddToWish) {
                if (wasAddToWish.map(el => el.id).includes(action.addtowish.id)) {
                    return wasAddToWish;
                } else {
                    wasAddToWish.push(action.addtowish);
                }
            } else {
                wasAddToWish = [];
                wasAddToWish.push(action.addtowish);
            }
            localStorage.setItem('wishlist', JSON.stringify(wasAddToWish));
            return wasAddToWish;
        case 'GET_FROM_LOCAL_WISH':
            return JSON.parse(localStorage.getItem('wishlist'));
        case 'DELETE_FROM_WISH':
            let wasDeletedFromWish = JSON.parse(localStorage.getItem('wishlist')).filter(a => a.id !== +action.id);
            localStorage.setItem('wishlist', JSON.stringify(wasDeletedFromWish));
            return wasDeletedFromWish;
        default:
            return state;
    }
}
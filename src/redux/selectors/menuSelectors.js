let arr = [];

const getPlayNowLength = (state) => {
    if (state.playNowArr !== null) {
        return state.playNowArr.length;
    } else {
        return 0;
    }
}

const getCommingSoonLength = (state) => {
    if (state.commingSoonArr !== null) {
        return state.commingSoonArr.length;
    } else {
        return 0;
    }
}

const getAddToFav = (state) => {
    if (state.addToFavArr !== null) {
        return state.addToFavArr.length;
    } else {
        return 0;
    }
}

const getAddToWishArr = (state) => {
    if (state.addToWishArr !== null) {
        return state.addToWishArr.length;
    } else {
        return 0;
    }
}

export const stateLength = (state) => {
    return arr = [getPlayNowLength(state), getCommingSoonLength(state), getAddToFav(state), getAddToWishArr(state)]};


export const pushLength = (state) => {
    stateLength(state);  
        return state.menuList.map((el , i) => ({
            ...el,
            movarr: arr[i++]
        }))
}

export const getRaiting = (state) => {
    let starsTotal = 10;
    return state.playNowArr.map(el => {
        let starPercentage = +((el.vote_average/starsTotal)*100);
        let starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        return {rating:starPercentageRounded, id: el.id};
    });
}

export const sortCommingSoon = (state) => state.commingSoonArr.map(el => ({...el, release_date:  new Date(el.release_date).getTime()})).sort((a,b) => b.release_date - a.release_date);

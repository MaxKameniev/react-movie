import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import showTitleHendler from './showTitleHendlerReducer';
import playNowArr from './playNowArrReducer';
import commingSoonArr from './commingSoonArrReducer';
import addToFavArr from './addToFavReducer';
import addToWishArr from './addToWishReducer';
import movieDetailsObj from './getMovieDetailsReducer';
import isLoading from './loaderReducer';
import menuList from './menuListReducer';
import searchArr from './getSearchReducer';
import searchInState from './searchStateReducer';


export default (history) => combineReducers({
    router: connectRouter(history),
    showMenu: showTitleHendler,
    playNowArr,
    commingSoonArr,
    addToFavArr,
    addToWishArr,
    movieDetailsObj,
    isLoading,
    menuList,
    searchArr,
    searchInState
})
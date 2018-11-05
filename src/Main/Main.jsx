import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/store/store';
import { connect } from 'react-redux';
import './Main.css';
import Play from '../Play/Play';
import Soon from '../Soon/Soon';
import Wish from '../Wish/Wish';
import Favorite from '../Favorite/Favorite';
import Moviecard from '../Moviecard/Moviecard';
import Search from '../Search/Search';
import { searchResult } from '../redux/actions/getSearchActiom';
import { addToFavAsync, getFromLocalFav } from '../redux/actions/addToFavAction';
import { addToWishAsync,  getFromLocalWish } from '../redux/actions/addToWishAction';
import { playNowAsync } from '../redux/actions/playNowAction';
import { commingSoonAsync } from '../redux/actions/commingSoonAction';
import { putSearchInState } from '../redux/actions/searchStateAction';
import PropTypes from 'prop-types';

class Main extends Component {
    
    componentDidMount() {
        this.props.playNowAsync()
        this.props.commingSoonAsync()
        this.props.getFromLocalWish()
        this.props.getFromLocalFav()
    }

    render() {
        let {addToFav, deleteFromFav, addToWish, deleteFromWish, getId, id, putSearchInState, searchInState, searchResult} = this.props;
    return (
        <div className="main_blc">
            <div className="search_blc">
                <form action="#">
                    <label>
                        <input className="input_form" type="text" id='search' placeholder="Search movie..." onChange={(event) => {putSearchInState(event); searchResult(searchInState)}} value={searchInState}/>
                        <i className="fas search_icon fa-search"></i>
                    </label>
                </form>
                <Search />
            </div>
            <div className="movie_blc">
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path='/' render={props => <Play addToFav={addToFav} addToWish={addToWish} getId={getId} />} />
                    <Route path='/upcoming' render={props => <Soon addToFav={addToFav} addToWish={addToWish} getId={getId} />} />
                    <Route path='/favorites' render={props => <Favorite deleteFromFav={deleteFromFav} getId={getId} />} />
                    <Route path='/wish' render={props => <Wish getId={getId} deleteFromWish={deleteFromWish} />} />
                    <Route path={`/:id`} render={props => <Moviecard id={id} {...props} />} />
                </Switch>
            </ConnectedRouter>
            </div>
        </div>
    )
    }
}

function MSDP (state) {
    return {
    searchInState: state.searchInState
    }
}

function MDTP (dispatch) {
    return {
        searchResult: function(query){
            dispatch(searchResult(query))
        },
        playNowAsync: function(){
            dispatch(playNowAsync())
        },
        addToFavAsync: function(event){
            dispatch(addToFavAsync(event))
        },
        addToWishAsync: function(event){
            dispatch(addToWishAsync(event))
        },
        commingSoonAsync: function(event){
            dispatch(commingSoonAsync(event))
        },

        getFromLocalWish: function(){
            dispatch(getFromLocalWish())
        },

        getFromLocalFav: function(){
            dispatch(getFromLocalFav())
        },
        putSearchInState: function(event){
            dispatch(putSearchInState(event))
        }
    }
}

Main.propTypes = {
    addToFav: PropTypes.func,
    deleteFromFav: PropTypes.func
}

export default connect (MSDP, MDTP) (Main);
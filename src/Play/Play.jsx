import React from 'react';
import { connect } from 'react-redux';
import { addToFavAsync } from '../redux/actions/addToFavAction';
import { addToWishAsync } from '../redux/actions/addToWishAction';
import { playNowAsync } from '../redux/actions/playNowAction';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Play = ({addToFavAsync, addToWishAsync, playNowAsync, getId, playNowArr}) => {

        return (
            <div>
                {playNowArr.map(el => <Card id={el.id} key={el.id} data={el.poster_path} title={el.original_title} getId={getId} changeFav={addToFavAsync} changeWish={addToWishAsync} />)}
            </div>
        )
}

function MSTP (state) {
    return {
        playNowArr: state.playNowArr,
    }
}

function MDTP (dispatch){
    return {
        playNowAsync: function(){
            dispatch(playNowAsync())
        },
        addToFavAsync: function(event){
            dispatch(addToFavAsync(event))
        },
        addToWishAsync: function(event){
            dispatch(addToWishAsync(event))
        } 
    }
}

Play.propTypes = {
    getId: PropTypes.func,
    addToFav: PropTypes.func,
    addToWish: PropTypes.func
};

export default connect (MSTP,MDTP) (Play);
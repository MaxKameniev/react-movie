import React from 'react';
import { connect } from 'react-redux';
import { getFromLocalWish, deleteFromWish } from '../redux/actions/addToWishAction';
import { addToFavAsync } from '../redux/actions/addToFavAction';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Wish = ({addToWishArr, deleteFromWish, getId, addToFavAsync}) => {
        return (
            <div>
                {addToWishArr !== null
                ? addToWishArr.map(el => <Card key={el.id} id={el.id} changeWish={deleteFromWish} changeFav={addToFavAsync} data={el.poster_path} title={el.original_title} getId={getId} />)
            : null}
            </div>
        )
}

function MSTP (state) {
    return {
        addToWishArr: state.addToWishArr,
    }
}

function MDTP (dispatch){
    return {
    getFromLocalWish: function(){
        dispatch(getFromLocalWish())
    },
    deleteFromWish: function(event){
        dispatch(deleteFromWish(event))
    },
    addToFavAsync: function(event){
        dispatch(addToFavAsync(event))
    }
}
}

Wish.propTypes = {
    getId: PropTypes.func,
    deleteFromWish: PropTypes.func
};

export default connect (MSTP,MDTP) (Wish);
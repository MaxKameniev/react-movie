import React from 'react';
import { connect } from 'react-redux';
import { commingSoonAsync } from '../redux/actions/commingSoonAction';
import { addToFavAsync } from '../redux/actions/addToFavAction';
import { addToWishAsync } from '../redux/actions/addToWishAction';
import { sortCommingSoon } from '../redux/selectors/menuSelectors';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Soon = ({sortCommingSoon, addToFavAsync, addToWishAsync, getId}) => {   
        return (
            <div>
                {sortCommingSoon.map(el => <Card id={el.id} key={el.id} title={el.original_title} data={el.poster_path} getId={getId} changeFav={addToFavAsync} changeWish={addToWishAsync} />)}
            </div>
        )
}

function MSTP (state) {
    return {
        commingSoonArr: state.commingSoonArr,
        sortCommingSoon: sortCommingSoon(state),
    }
}

function MDTP (dispatch) {
    return {
    commingSoonAsync: function() {
        dispatch(commingSoonAsync())
    },
    addToFavAsync: function(event) {
        dispatch(addToFavAsync(event))
    },
    addToWishAsync: function(event) {
        dispatch(addToWishAsync(event))
    }
    }
}

Soon.propTypes = {
    getId: PropTypes.func,
    addToFav: PropTypes.func,
    addToWish: PropTypes.func
};

export default connect (MSTP,MDTP) (Soon);
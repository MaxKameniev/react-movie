import React from 'react';
import { connect } from 'react-redux';
import { getFromLocalFav, deleteFromFav} from '../redux/actions/addToFavAction';
import { addToWishAsync } from '../redux/actions/addToWishAction';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Favorites = ({addToFavArr, getId, deleteFromFav, addToWishAsync}) => {
        return (
            <div>
                {addToFavArr !== null
                ? addToFavArr.map(el => <Card key={el.id} data={el.poster_path} title={el.original_title} getId={getId} changeWish={addToWishAsync} changeFav={deleteFromFav} id={el.id} />)
                : null}
            </div>
        )
}

function MSTP (state) {
    return {
    addToFavArr: state.addToFavArr,
    }
}

function MDTP (dispatch) {
    return {
        getFromLocalFav: function(){
            dispatch(getFromLocalFav())
        },
        deleteFromFav: function(event){
            dispatch(deleteFromFav(event))
        },
        addToWishAsync: function(event){
            dispatch(addToWishAsync(event))
        } 
    }
}

Favorites.propTypes = {
    getId: PropTypes.func,
    deleteFromFav: PropTypes.func
};

export default connect (MSTP,MDTP) (Favorites);
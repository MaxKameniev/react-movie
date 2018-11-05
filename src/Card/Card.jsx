import React from 'react';
import { NavLink } from 'react-router-dom';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({data, title, id, changeFav, changeWish, getId}) => {
    return (<div>
        {data ?
        <div className="movie_card">
            <img className="movie_img" alt={title} src={`https://image.tmdb.org/t/p/w300/${data}`}/><span className="movie_icons_blc"><i data-movieid={id} onClick={changeFav} className="fas fa-star"></i><i data-movieid={id} onClick={changeWish} className="fas fa-heart"></i><NavLink to={`/${id}`}><i onClick={getId} data-movieid={id} className="info_icon fas fa-info-circle"></i></NavLink></span>
        </div>
        : null}
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    data: PropTypes.string,
    title: PropTypes.string,
    getId: PropTypes.func,
    changeFav: PropTypes.func,
    changeWish: PropTypes.func
};


export default Card;
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Search.css';


const Search = (props) => {
    return (
        <div className="search_res_wrapper">
            {props.searchArr.map(el => <NavLink key={el.id} to={`/${el.id}`}><div className="search_res_blc"><img className="search_res_img" alt={el.title} src={el.poster_path ? `https://image.tmdb.org/t/p/w300${el.poster_path}` : null} /><div className="search_res_text"><div className="search_res_title">{el.title}</div><div className="search_res_overview">{el.overview.length > 300 ? `${el.overview.substring(0, 300)}...` : `${el.overview.substring(0, 300)}`}</div></div></div></NavLink>)}
        </div>
    );
};

function MSTP (state) {
    return {
        searchArr: state.searchArr
    }
}


export default connect (MSTP) (Search);
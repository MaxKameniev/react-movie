import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeMenuStatus } from '../redux/actions/showTitleHendlerAction';
import { NavLink } from 'react-router-dom';
import { menuListShow } from '../redux/actions/menuListAction';
import { pushLength, stateLength, getRaiting } from '../redux/selectors/menuSelectors';
import './Menu.css';
import PropTypes from 'prop-types';

class Menu extends Component {

    componentDidMount() {
        this.props.menuListShow();
    }

    render() {
        return (
            <div className="menu_blc">
                <div>
                    <h1 className="logo">
                        <i className="logo-icon fas fa-film"></i>
                        <div>24Frames</div>
                    </h1>
                    <div className="mobile_menu" onClick={this.props.changeShowMenu}><i className="menu_icon fas fa-align-justify"></i>&nbsp;MENU</div>
                    <ul className={this.props.showMenu ? 'list_menu_show' : 'list_menu_hide'}>
                        {this.props.menuList.map(el => 
                            <li key={el.name} className="li_menu">
                                <i className={`${el.icon} icon_menu`}></i>
                                <div className="item_menu">
                                    <NavLink exact to={el.url} onClick={this.props.changeShowMenu}>{el.name}</NavLink>
                                </div>
                                <span className="count_menu">{el.movarr}</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="raiting_blc">
                    <div className="raiting_title">Top raited</div>
                    <div className="raiting_content">
                    {this.props.playNowArr.sort((a, b) => b.vote_average - a.vote_average).filter(voite => voite.vote_count > 100).slice(0, 5).map(el => {
                        let ratObj = this.props.getRaiting.find(obj => obj.id === el.id)
                       return <div className="raiting_wrapper" key={el.id}>
                        <img src={`https://image.tmdb.org/t/p/w300${el.poster_path}`} className="raiting_poster" alt={el.original_title}/>
                           <div className="raiting_item">
                           <NavLink exact to={`/${el.id}`}>
                                <div className="raiting_movie_title">{el.title}</div>
                            </NavLink>  
                               <div className="stars-blc">
                                   <div className="stars-outer">
                                       <div className="stars-inner" style={{ width: ratObj.rating }}></div>
                                   </div>
                                   <span className="number-raiting">{el.vote_average}</span>
                               </div>
                               <div className="raiting_votes">Total votes: {el.vote_count}</div>
                           </div>
                       </div>
                    } )}
                    </div>
                </div>
            </div>
        )
    }
}

function MSTP (state) {
    return {
        showMenu: state.showMenu,
        playNowArr: state.playNowArr,
        commingSoonArr: state.commingSoonArr,
        menuList: pushLength(state),
        stateLength: stateLength(state),
        getRaiting: getRaiting(state), 
    }
}

function MDTP (dispatch) {
    return {
        changeShowMenu: function(){
            dispatch(changeMenuStatus())
        },
        menuListShow: function(){
            dispatch(menuListShow())
        }
    }
}

Menu.propTypes = {
    data: PropTypes.object
}

export default connect (MSTP, MDTP) (Menu);
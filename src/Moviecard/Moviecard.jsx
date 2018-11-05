import React, { Component } from 'react';
import { movieDetailsAsync } from '../redux/actions/getMovieDetailsAction';
import { connect } from 'react-redux';
import './Moviecard.css';
import Loader from 'react-loader-spinner';
import Recommend from '../Recommend/Recommend';
import { closeSearch } from '../redux/actions/getSearchActiom';
import PropTypes from 'prop-types';

class Moviecard extends Component {

    componentDidMount(){
        let movieid = this.props.match.params.id;
        this.props.movieDetailsAsync(movieid);
    }

    componentWillReceiveProps(newProps){
        if(this.props.match.params.id !== newProps.match.params.id){
            this.props.movieDetailsAsync(newProps.match.params.id)
        }
    }

    render() {
        let {backdrop_path, original_title, poster_path, overview, release_date, vote_average, vote_count, runtime, production_companies, tagline, trailers, recommendation} = this.props.movieDetailsObj;
        return (
            <div>
                {this.props.isLoading === false ?
                    <div className="moviecard-blc">
                        <div className="moviecard-background-poster">
                            <div className="moviecard-background-img" style={backdrop_path ? { backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`}
                            : {backgroundColor: "#4c4145"}}></div>
                            <div className="moviecard-tagline">{tagline}</div>
                            <div className="moviecard-poster-blc">
                                <img className="moviecard-poster-img" src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={original_title} />
                                <div className="moviecard-poster-title">
                                    <span>{release_date.substring(0, 4)}</span>
                                    <h1>{original_title}</h1>
                                    {runtime ?
                                    <div className="moviecard-time"><i className="far fa-clock"></i>{runtime} min</div>
                                    : null}
                                    {vote_average ?
                                    <div className="moviecard-rate"><span>{vote_average.toPrecision(2)}</span>{vote_count} votes</div>
                                    :null}
                                    <div>{production_companies[0] ? production_companies[0].name : null}</div>
                                </div>
                            </div>
                        </div>                 
                        <div className="moviecard-description">
                        {overview ?
                            <div className="moviecard-description-blc" style={trailers[0] ? null : {flexBasis: "100%"}}>
                                <h2 className="moviecard-h2-title">Owerview</h2>
                                <div className="moviecard-decription-text">{overview}</div>
                            </div>
                            : null}
                            {trailers[0] ?
                                <div className="moviecard-trailer-blc">
                                    <h2 className="moviecard-h2-title">Trailer</h2>
                                    <iframe className="moviecard-trailer-video" title="trailer" src={`https://www.youtube.com/embed/${trailers[0].key}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                </div>
                                : null
                            }
                        </div>
                
                    <div className="moviecard-slider-blc">
                            <Recommend rec={recommendation}/>
                    </div>
                </div> :  <div className="loader-wrapper"><Loader type="Watch" width="50px" height="50px" color="black"/></div>
               }
            </div>
        );
    }
}

function MSTP (state) {
    return {
        movieDetailsObj: state.movieDetailsObj,
        isLoading: state.isLoading,
    }
}

function MDTP (dispatch) {
    return {
        movieDetailsAsync: function(movieid){
            dispatch(movieDetailsAsync(movieid))
        },
        closeSearch: function(){
            dispatch(closeSearch())
        }
    }
}

Moviecard.propTypes = {
    id: PropTypes.string
}

export default connect (MSTP,MDTP) (Moviecard);
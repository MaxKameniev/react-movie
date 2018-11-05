import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5   ,
      slidesToScroll: 5,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
        {this.props.rec.map(el => <div key={el.id}><NavLink to={`/${el.id}`}><img height="150px" src={`https://image.tmdb.org/t/p/w300${el.poster_path}`} alt={el.title}/></NavLink></div>)}

        </Slider>
      </div>
    );
  }
}
import React, { Component } from 'react';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Chat from './Chat/Chat';
import './App.css';

class App extends Component {

  state = {

    chats: [
      {id: 1, icon: 'https://via.placeholder.com/40x40', name: 'Name 1', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit in non quae deserunt!'},
      {id: 2, icon: 'https://via.placeholder.com/40x40', name: 'Name 2', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit in non quae deserunt!'},
      {id: 3, icon: 'https://via.placeholder.com/40x40', name: 'Name 3', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit in non quae deserunt!'},
      {id: 4, icon: 'https://via.placeholder.com/40x40', name: 'Name 4', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit in non quae deserunt!'},
      {id: 5, icon: 'https://via.placeholder.com/40x40', name: 'Name 5', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit in non quae deserunt!'},
      {id: 6, icon: 'https://via.placeholder.com/40x40', name: 'Name 6', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit in non quae deserunt!'},
      {id: 7, icon: 'https://via.placeholder.com/40x40', name: 'Name 7', message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus impedit in non quae deserunt!'},
    ],
    id: '',
  } 

getId = (event) => {
   let id = event.target.dataset.movieid;
   this.setState({
     id: id,
   })
}

  render() {
      return (
      <div className="movie-wrapper">
        <Menu data={this.state.menu}/>
        <Main addToFav={this.addToFav} deleteFromFav={this.deleteFromFav} deleteFromWish={this.deleteFromWish} addToWish={this.addToWish} getId={this.getId} id={this.state.id}/>
        <Chat chats={this.state.chats} id={this.state.chats.id}/>
      </div>
    );
  }
}

export default App;

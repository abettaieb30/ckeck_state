import React, { Component } from 'react'
import './App.css';
import Profile from './profile';
import Time from './Time'
export default class App extends Component {
 
  state= { shows : true}

  
  render() {
    return (
      <div className='app'>
         <button onClick={()=>{this.setState({shows: !this.state.shows})}} className='btn'> click here to show card!</button>
     {this.state.shows? <div> <Profile/> </div> : null}    
      <Time/>
      </div>
    )
  }
}


import React, { Component } from 'react'

export default class Time extends Component {
    state= { myInterval : setInterval(1000) }
  render() {
    return (
      <div>
       { ()=> {this.state.myInterval}}
      </div>
    )
  }
}

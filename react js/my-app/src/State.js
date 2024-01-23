import React, { Component } from 'react'

export default class State extends Component {
    constructor() {
        super();
        this.state={
            name:"This is state with in constructor"
        };
    }
  render() {
    return (
      <div>
        <h2>Hello This is default state</h2>
        <h2>{this.state.name}</h2>
      </div>
    )
  }
}

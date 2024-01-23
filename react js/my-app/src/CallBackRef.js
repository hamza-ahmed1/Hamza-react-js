import React, { Component } from 'react'

export default class CallBackRef extends Component {
    constructor(props) {
        super(props);
        this.ref=null;
        this.setref=(element)=>{
            this.ref=element;
        }
    }

    componentDidMount()
    {
        console.log(this.ref);
    }
  render() {
    return (
      <div>
        <h1 ref={this.setref}>This is Heading</h1>
      </div>
    )
  }
}

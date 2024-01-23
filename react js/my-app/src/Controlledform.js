import React, { Component } from 'react'

export default class Controlledform extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:"Hamza"
        }

    }
    HandleForm=(event)=>{
            this.setState({
                name:event.target.value
            })
    }
    FormSubmissionHandle=(e)=>
    {
      e.preventDefault();
      console.log(e.target[0].value);
    }
  render() {
    return (
      <div>
            <form onSubmit={this.FormSubmissionHandle}>
            <h1>{this.state.name}</h1>
                <label>Enter Name : </label>
                <input type='text' value={this.state.name} onChange={this.HandleForm}/>
                <input type='submit' value ='submit' />
            </form>
      </div>
    )
  }
}

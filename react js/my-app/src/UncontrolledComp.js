import React, { Component, createRef } from 'react'

export default class UncontrolledComp extends Component {

    constructor(props) {
        super(props)

        this.nameref=createRef();
        this.ageref=createRef();

    }

    componentDidMount()
    {
        console.log(this.nameref);
        console.log(this.ageref);

    }

     formHandler=(e)=>{
        e.preventDefault();
            console.log(e);
    }
  render() {
    return (
      <div>

      <form onSubmit={formHandler}>

        <lable >Enter Name&nbsp;</lable>
        <input ref={this.nameref} type='text' />
        <br/>
        <lable>Enter Age&nbsp;</lable>
        <input ref={this.ageref} type='number' />
        <br/>
        <br/>
        <input type='submit' value={'submit'} />
      </form>
      </div>
    )
  }
}

import React, { Component } from 'react'
import './Heading.css'
export default class Heading extends Component {
    render() {
      var classname;
      if(window.innerWidth<600)
      {
        classname='Heading1';
      }
      else  if(window.innerWidth>600)
      {
        classname='main_H';
      }
    return (
      <div>
        <p className={classname}>This is main Heading</p>
      </div>
    )
  }
}

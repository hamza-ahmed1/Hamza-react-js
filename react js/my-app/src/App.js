import React, { Component, createContext } from 'react'
import PropTypes from 'prop-types'
import UsComponentwithObj from './UsComponentwithObj'
import USwithArray from './USwithArray'
import ComponentA from './ComponentA'
import Controlledform from './Controlledform'
import MulFieldsForm from './MulFieldsForm'
import MultipleTags from './MultipleTags'

import CallBackRef from './CallBackRef'
// export default class App extends Component {
//   render() {
//     var obj=this.props;
//     return (
//       <div>
//         <h1>Hello {obj.name}</h1>
//       </div>
//     )
//   }
// }

// App.propTypes={
//   name:PropTypes.number.isRequired
// }



// export default class App extends Component {
//   constructor(props)
//   {
//     super(props);
//     console.log("this is constructor");
    
//   }
//   render(props) {
//     return (
//       <div>
//         <h1>Hi {this.props.name}</h1>
//       </div>
//     )
//   }
// }
// import React from 'react'
import UseStateComponent from './UseStateComponent'
import { useContext } from 'react'
import UncontrolledComp from './UncontrolledComp'
import UseRefHook from './UseRefHook'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import FormikForm1 from './FormikForm1'
import FormikForm2 from './FormikForm2'
export const NameContext=createContext();
export default function App() {
  return (
    <div>
<FormikForm2/>
    </div>
  )
}



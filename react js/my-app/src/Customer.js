// import React from 'react'

//1-destructuring one way
// export default function Customer({name,age}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   )
// }



// 2-another way
// export default function Customer(props) {
//     const {name,age}=props;
//   return (
//     <div>
//     <h1>{name}</h1>
//     <h1>{age}</h1>
//   </div>
//   )
// }

// import React, { Component } from 'react'

// export default class Customer extends Component {
//   render() {
//     const {name,age}=this.props;
//     return (
      
//     <div>
//      <h1>{name}</h1>
//      <h1>{age}</h1>
//   </div>
      
//     )
//   }
// }

import React, { Component } from 'react'

export default class Customer extends Component {
    constructor(){
        super();
        this.state={
            name:"Ali",
            age:10
        };
          
        
    }
  render() {
    const {name,age}=this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
      </div>
    )
  }
}




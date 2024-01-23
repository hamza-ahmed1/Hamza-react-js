import React from "react";
import PropTypes from 'prop-types'
import App from "./App";

// arrow functions
const Greetings=obj=> {
    return(
        <div>
            <h1>Hi {obj.name}</h1>
            {/* <h2>{obj.children}</h2> */}
            <h3>your age is {obj.age}</h3>
        </div>
    );
}
Greetings.propTypes={
    name:PropTypes.string,
    age:PropTypes.number.isRequired
}
Greetings.defaultProps={
    name:"XYZ"
}
export default Greetings;
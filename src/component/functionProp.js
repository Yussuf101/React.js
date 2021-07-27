import React from 'react'

function FunctionProps (props) {
    return (<div>
        <h3> This is function components</h3>
        <h3>Hello {props.name} from {props.location} and welcome to prop classes</h3>
   </div>
    );
};

export default FunctionProps;

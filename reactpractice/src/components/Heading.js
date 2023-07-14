import React from 'react'
function Heading (props){

    /*
        In this Example :- Two things done 
        (1). Ternary Expression in JSX 
        (2). Functions expression in JSX 
    */

    let userRoleValue = 0; // (1). Based on this value, ternary operator output value 
    const randomNumber = () => Math.floor(Math.random() * 10 + 1) // (2). Generating random number through a function


    return (
        <div>
            <h1>Hello {props.username} Heading Component with JSX</h1>
            <h1>{userRoleValue===0?'Front-End Developer':'Back-End Developer'}</h1>
            <h2>{randomNumber()}</h2>
        </div>
    
    )
    // return /*#__PURE__*/React.createElement("h1",null, "Heading Component with plain Javascript")
}
export default Heading;
import React from 'react'
function Heading (props){


    /*
        In this example :- Passing expression as a value(true or false) 
        from Parent Component(App.js) to Heading (child)
        we can pass any expression as props
    */
    let userRoleValue = 0; // (1). Based on this value, ternary operator output value 
    


    return (
        <div>
            <h1>Hello {props.username} Heading Component with JSX</h1>
            <h1>{userRoleValue===0?'Front-End Developer':'Back-End Developer'}</h1><span>{props.value === true ? 'YES':'NO'}</span>
          
            
        </div>
    
    )
    // return /*#__PURE__*/React.createElement("h1",null, "Heading Component with plain Javascript")
}
export default Heading;
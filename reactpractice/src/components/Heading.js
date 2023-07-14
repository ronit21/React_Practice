import React from 'react'

function Heading (props){


    /*
        In this example :- importing image and then 
        passed as props from App.js to Heading.js
        And then used in Heading.js as props.image
        
    */
    let userRoleValue = 0; 
    

    return (
        <div>
            <h1>Hello {props.username} Heading Component with JSX</h1>
            <h1>{userRoleValue===0?'Front-End Developer':'Back-End Developer'}</h1><p>{props.value === true ? 'YES':'NO'}</p>
            <img src={props.image} alt='Profile pic'/>
            
        </div>
    
    )
    // return /*#__PURE__*/React.createElement("h1",null, "Heading Component with plain Javascript")
}
export default Heading;
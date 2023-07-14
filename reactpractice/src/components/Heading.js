import React from 'react'
function Heading (props){
    return (<h1>Hello {props.username} Heading Component with JSX</h1>)
    // return /*#__PURE__*/React.createElement("h1",null, "Heading Component with plain Javascript")
}
export default Heading;
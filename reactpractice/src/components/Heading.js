import React from 'react'
function Heading (props){
    /*
        3 things to note while using CSS style
        1. Key used as Camelcase. [Example] In CSS :- border-radius => In React :- borderRadius (without any hyphen)
        2. Values should be inside quotation ('') 
        3. Colon (:) used instead of equal(=)
    */
    const headingStyle = {
        color : 'white',
        backgroundColor : 'blue',
        borderRadius : '2px',
        border : '1px solid black',
        width : '400px',
        margin : '10px',
        textAlign : 'center'
    }
    return (
    <h1 style={headingStyle}>Hello {props.username} Heading Component with JSX</h1>
    )
    // return /*#__PURE__*/React.createElement("h1",null, "Heading Component with plain Javascript")
}
export default Heading;
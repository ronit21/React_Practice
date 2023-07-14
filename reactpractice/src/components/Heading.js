import React from 'react'

function Heading (props){

    /*
        In this Example :-
        Using Re-use same component multiple times
        
    */

    return (
        <div className="card">
            <h1>Name :  {props.username} </h1>
            <h2>Role : {props.role}</h2>
            <img src={props.image} alt='Profile pic'/>
        </div>
    
    )
}
export default Heading;
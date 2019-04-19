import React from 'react';

const Display = (props) => {
    
    return ( <>
        <h1>At Bat</h1>
        <h3 data-testid="balls">Balls: {props.balls}</h3>
        <h3 data-testid="strikes">Strikes: {props.strikes}</h3>
    </> );
}
 
export default Display;
import React from 'react';

const Dashboard = (props) => {
    return ( <>
        <button onClick ={props.strikeCount}>strike</button>
        <button onClick ={props.ballCount}>ball</button>
        <button onClick ={props.foulCount}>foul</button>
        <button onClick ={props.hitCount}>hit</button>
    </> );
}
 
export default Dashboard;
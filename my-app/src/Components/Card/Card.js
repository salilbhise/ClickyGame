import React from 'react';

import './Card.css';

function Card(props){
    return(
    <div onClick={()=> props.handleClick(props.id)} className="card"> 
        <div>{props.name}</div>
        <img src={props.image}/>
    
    </div>
    )
}



export default Card;
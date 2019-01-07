import React from 'react';

import './Header.css';

function Header(props){
    return(<div className="header"> Score: {props.score}</div>)
}



export default Header;
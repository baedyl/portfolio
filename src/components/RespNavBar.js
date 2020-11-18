import React from 'react';
import { Link } from 'react-router-dom';

import './style/RespNavBar.css';

const RespNavBar = () => {
    return(
        <div className="responsive header sticky" id="myTopnav">
            <Link className="button" to="/">
                Home
            </Link>
            <Link className="button" to="/about">
                About
            </Link>
            <Link className="button" to="/projects">
                Projects
            </Link>
            <Link className="button" to="/contact">
                Contact
            </Link>
            
        </div>
    );
}

export default RespNavBar;
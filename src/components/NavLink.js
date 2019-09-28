import React from 'react';
import { Link } from 'react-router-dom';

import './style/NavBar.css';

const NavLink = (props) => {
    return ( 
        <Link to={ props.link } className="button">
            { props.text }
        </Link>
    );
}

export default NavLink;
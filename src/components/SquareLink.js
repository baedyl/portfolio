import React from 'react';
import { Link } from 'react-router-dom';

import './style/NavBar.css';

const SquareLink = (props) => {
    return (
        <Link to={ props.link } className="square">
            { props.text }
        </Link>
    );
}

export default SquareLink;
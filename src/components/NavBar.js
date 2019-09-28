import React from 'react';
import { Link } from 'react-router-dom';

import './style/NavBar.css';


const NavBar = (props) => {
    const elems = 
        props.items.map((item) => 
            <li key={ item.num }>
                <Link className="navLink" to={ item.link }>
                    { item.title }
                </Link>
            </li>
        );
    return(
        <header>
            <nav>
                <label htmlFor="nav-input">☰</label>
                <input type="checkbox" name="nav-input" id="nav-input"></input>
                <ul>
                    { elems }
                </ul>   
            </nav>
        </header>
        
    );
}

/*
const elems = 
        props.items.map((item) => 
            <Link to={ item.link }>
                { item.title }
            </Link>
        );

<div className="topnav" id="myTopNav">
    { elems }
    <a href="#responsive" className="icon" onClick={ responsiveNavBar }>
        <i class="fa fa-bars"></i>
    </a>
</div>

<label for="nav-input">☰</label>
			<input type="checkbox" name="nav-input" id="nav-input">
*/

export default NavBar;
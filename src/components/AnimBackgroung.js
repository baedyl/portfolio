import React from 'react';
import { Link } from 'react-router-dom';

import './style/AnimBackground.css';

const AnimBackground = () => {
    return(
        <div className="area" >
            <ul className="circles">
                <li></li>
                <li>
                    <Link className="" to="/projects">
                        Projects
                    </Link>        
                </li>          
                <li>
                    <Link className="" to="/about">
                        About
                    </Link>
                </li>              
                <li></li>
                <li>
                    <Link className="" to="/contact">
                        Contact
                    </Link>
                </li>      
                <li></li>    
                <li></li> 
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

export default AnimBackground;
import React from 'react';
import { Link } from 'react-router-dom';
import ParticlesBg from './ParticlesBg';
import './style/AnimBackground.css';

const AnimBackground = (props) => {
    let bg = ''
    if (props.home) {
        bg = <ul className="circles">
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
    }
    return(
        <div className="area" >
            <div className="circles">
                <ParticlesBg/>
            </div>
            { bg }
        </div>
    );
}

export default AnimBackground;
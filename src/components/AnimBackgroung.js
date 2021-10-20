import React from 'react';
import ParticlesBg from './ParticlesBg';
import './style/AnimBackground.css';

const AnimBackground = (props) => {
    let bg = ''
    if (props.home) {
        bg = <ul className="circles">
                <li></li>
                <li></li>          
                <li></li>              
                <li></li>
                <li> </li>      
                <li></li>    
                <li></li> 
                <li></li>
                <li></li>
            </ul>
    }
    return(
        <div className="area" >
            <div className="circles">
                <div className="particles">
                    <ParticlesBg/>
                </div>
            </div>
            { bg }
        </div>
    );
}

export default AnimBackground;
import React from 'react';
import { Link } from 'react-router-dom';

import ProfileImage from '../../src/images/me.jpg';
import './style/Profile.css';

const Profile = () => {
    return(
        <div>
            <Link className="navLink" to="/about">
                <img src={ ProfileImage } className="Profile-picture" alt="Portrait of me" />
            </Link>
            
        </div>
        
    );
}

export default Profile;
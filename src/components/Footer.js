import React from 'react';

import TwitterLogo from '../../src/images/twitter.svg';
import LinkedInLogo from '../../src/images/link.svg';
import InstaLogo from '../../src/images/insta.svg';
import GithubLogo from '../../src/images/git.svg';

import './style/Footer.css';


const Footer = (props) => {
    return(
        <footer>
            <a href="https://twitter.com/Baedyl" target="blank">
                <img src={ TwitterLogo } alt="Twitter Logo" className="icon"></img>
            </a>
            <a href="https://www.linkedin.com/in/baedyl/" target="blank">
                <img src={ LinkedInLogo } alt="LinkedIn Logo" className="icon"></img>
            </a>
            <a href="https://github.com/baedyl" target="blank">
                <img src={ GithubLogo } alt="Github Logo" className="icon"></img>
            </a>
            <a href="https://www.instagram.com/mannnnnuuuuuuu/" target="blank">
                <img src={ InstaLogo } alt="Instagram Logo" className="icon"></img>
            </a>
        </footer>
        
    );
}

export default Footer;
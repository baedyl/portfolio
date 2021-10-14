import React from 'react';
import AnimBackground from './AnimBackgroung';

import Profile from './Profile';
import CamerFlag from '../../src/images/cmr.png';
import MorFlag from '../../src/images/mor.svg';
import FrFlag from '../../src/images/fr.png';

import './style/Home.css';
import './style/About.css';

const Home = () => {
    return(  
        <section>
            <div className="wrapper">     
                <div className="FirstWord">
                    <span>Hello world!</span>
                </div>
                <div className="CatchPhrase animate">
                    <span>
                        Welcome :)
                    </span>
                </div>
            </div>
            <div className="bio">
                <Profile />
                <section className="text">
                    I'm Emmanuel, a <b>Full Stack Web Developer</b>. I care about building robust software and 
                    create intuitive interactions. In order to do that, I make use of the set of skills I acquired along my journey 
                    mixed with a sprinkle of creativity and bring ideas to life.
                    <hr/> 
                    I had the opportunity to collaborate with companies like <a className="external" href="https://creasouk.com/" target="blank">Creasouk</a>, 
                    <a className="external" href="http://www.koerigg.com/" target="blank"> Koerigg Enterprises</a> and most recently <a className="external" href="http://www.kaokeb.com/" target="blank">Kaokeb</a> which helped me gaining
                    experience in a production environment and general software development best practices.
                </section>
            </div>
            <AnimBackground home="true"/>        
        </section>          
    );
}

export default Home;
import React from 'react';
import AnimBackground from './AnimBackgroung';
import './style/About.css';

import Profile from './Profile';
import CamerFlag from '../../src/images/cmr.png';
import MorFlag from '../../src/images/mor.svg';
import FrFlag from '../../src/images/fr.png';


const About = () => {
    return(
        <section>
            <AnimBackground /> 
            <div className="bio">
                <Profile />
                <section className="text">
                    Hi! I'm Manu, a <b>Full Stack Web Developer</b> borned and raised in Yaoundé, Cameroon&nbsp;
                    <img src={ CamerFlag } alt="Cameroon Flag" className="flag"/>. I care about building robust software and 
                    create intuitive interactions. In order to do that, I make use of the set of skills I acquired along my journey 
                    mixed with a sprinkle of creativity and bring ideas to life.
                    <hr/>
                    I am a recent graduate from <a className="external" href="http://www.emsi.ma/" target="blank">EMSI</a> in Rabat, Morocco&nbsp;
                    <img src={ MorFlag } alt="Moroccan Flag" className="flag"/> &
                    <a className="external" href="http://unice.fr/en" target="blank"> UNICE</a> <img src={ FrFlag } alt="French Flag" className="flag"/>
                    &nbsp;(Masters MIAGE) where I studied Computer Science and Networks. 
                    I had the opportunity to collaborate with companies like <a className="external" href="https://creasouk.com/" target="blank">Creasouk</a>, 
                    <a className="external" href="http://www.koerigg.com/" target="blank"> Koerigg Enterprises</a> and most recently <a className="external" href="http://www.kaokeb.com/" target="blank">Kaokeb</a> which helped me gaining
                    experience in a production environment and general software development best practices.
                </section>
            </div>
        </section>
    );
}

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

import Tag from './Tag';

import DentalScreen from '../../src/images/dentalScreen.png';
import LifterLifeScreen from '../../src/images/lifterScreen.png';
import ApiScreen from '../../src/images/apiScreen.png';
import CreasoukScreen from '../../src/images/creasoukScreen.png';
import LearningScreen from '../../src/images/learnScreen.png';
import VidjotScreen from '../../src/images/vidjotScreen.png';
import ToursScreen from '../../src/images/toursScreen.png';
import PortfolioScreen from '../../src/images/portfolioScreen.png';
import './style/Card.css';

const Card = (props) => {
    let card = '';
    if (props.screen === 'dental') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ DentalScreen } alt="ScreenShot of the App" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="Axios"></Tag>
                <Tag text="Electron"></Tag>
                <Tag text="MySQL"></Tag>
                <Tag text="Vue.js"></Tag>
                <Tag text="Vuex"></Tag>
            </div>
        </Link>;
    } else if (props.screen === 'lifterLife') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ LifterLifeScreen } alt="ScreenShot of Lifter Life" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="CPanel"></Tag>
                <Tag text="JQuery"></Tag>
                <Tag text="Material"></Tag>
                <Tag text="MySQL"></Tag>
                <Tag text="PHP"></Tag>
            </div>
        </Link>;
    } else if (props.screen === 'restaurants') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ ApiScreen } alt="ScreenShot of restaurants api" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="ElementUI"></Tag>
                <Tag text="Node.js"></Tag>
                <Tag text="Rest"></Tag>
                <Tag text="Selenium"></Tag>
                <Tag text="Vue.js"></Tag>
            </div>
        </Link>;
    } else if (props.screen === 'creasouk') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ CreasoukScreen } alt="ScreenShot of Creasouk" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="CodeIgniter"></Tag>
                <Tag text="JQuery"></Tag>
                <Tag text="MySQL"></Tag>
                <Tag text="PHP"></Tag>
            </div>
        </Link>;
    } else if (props.screen === 'learn') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ LearningScreen } alt="ScreenShot of Learning Platform" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="Bootstrap"></Tag>
                <Tag text="JEE"></Tag>
                <Tag text="MongoDB"></Tag>
            </div>
        </Link>;
    } else if (props.screen === 'vidjot') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ VidjotScreen } alt="ScreenShot of Video Ideas" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="Handlebars"></Tag>
                <Tag text="Heroku"></Tag>
                <Tag text="Node.js"></Tag>
                <Tag text="MongoDB"></Tag>
            </div>
        </Link>;
    } else if (props.screen === 'tours') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ ToursScreen } alt="ScreenShot of Tours" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="Handlebars"></Tag>
                <Tag text="Heroku"></Tag>
                <Tag text="Node.js"></Tag>
                <Tag text="MongoDB"></Tag>
            </div>
        </Link>;
    } else if(props.screen === 'portfolio') {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <img src={ PortfolioScreen } alt="ScreenShot of portfolio" className="AppScreen" style={{width:'100%'}}></img>
            <span>{ props.title }</span>
            <div className="Tags">
                <Tag text="React"></Tag>
                <Tag text="Github Pages"></Tag>
                <Tag text="JSX"></Tag>
                <Tag text="Static"></Tag>
            </div>
        </Link>;
    } else {
        card = 
        <Link to={ props.link } style={{color:'#eeeeee'}}>
            <span>{ props.title }</span>
        </Link>
    }
    return(
        <div className="Card">
            { card }
        </div>
    );
}

export default Card;
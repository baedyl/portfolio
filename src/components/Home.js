import React, { Component } from 'react';
import AnimBackground from './AnimBackgroung';
import IdeaButton from './IdeaButton';
import Profile from './Profile';
import ModalView from './HomeModal';

import './style/Home.css';
import './style/About.css';

class Home extends Component {
    state = { show: false };

    showModal = () => {
        this.setState(
            {
                show: true
            }
        );
    }

    hideModal = () => {
        this.setState(
            {
                show: false
            }
        );
    }

    render() {
        return( 
            <main>
            <section>
                <IdeaButton showModal={ this.showModal } />
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
            <ModalView show={ this.state.show } handleClose={ this.hideModal } className="modal">
            <p>Modal</p>
            <p>Data</p>
        </ModalView>          
            </main> 
        );
    }
}

export default Home;
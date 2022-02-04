import React, { Component } from "react";
import AnimBackground from "./AnimBackgroung";
import IdeaButton from "./IdeaButton";
import Profile from "./Profile";
import ModalView from "./HomeModal";

import "./style/Home.css";
import "./style/About.css";

class Home extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <main>
        <section>
          <IdeaButton showModal={this.showModal} />
          <div className="wrapper">
            <div className="FirstWord">
              <h2>Hello world!</h2>
            </div>
            <div className="CatchPhrase animate">
              <h2>Welcome :)</h2>
            </div>
          </div>
          <div className="bio">
            <Profile />
            <section className="text">
              <p>
                I'm <b>Emmanuel Dylan</b>, a Software Engineer.
              </p>
              <p>
                I care about building robust applications and create intuitive
                interactions.
              </p>
              {/* <hr/> 
                        I had the opportunity to collaborate with companies like <a className="external" href="https://creasouk.com/" target="blank">Creasouk</a>, 
                        <a className="external" href="http://www.koerigg.com/" target="blank"> Koerigg Enterprises</a> and most recently <a className="external" href="http://www.kaokeb.com/" target="blank">Kaokeb</a> which helped me gaining
                        experience in a production environment and general software development best practices. */}
            </section>
          </div>
          <AnimBackground home="true" />
        </section>
        <ModalView
          show={this.state.show}
          handleClose={this.hideModal}
          className="modal"
        >
          <p>Modal</p>
          <p>Data</p>
        </ModalView>
      </main>
    );
  }
}

export default Home;

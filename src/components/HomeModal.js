import React from "react";
import styled from "styled-components";
import CloseImage from "../../src/images/close.png";

import "./style/HomeModal.css";

const CloseButton = styled.button`
  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid #00adb5;
  border-radius: 3px;
  position: fixed;
  right: 7%;
  top: 7%;
  z-index: 100;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    right: 0%;
  }
`;

const Img = styled.img`
  height: 48px;
`;

const ModalView = ({ handleClose, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <CloseButton onClick={ handleClose } className="close-btn"><Img src={CloseImage} alt="close icon" /></CloseButton>
      <h1 className="question">How can I help you ?</h1>
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <div className="num">01</div>
          <a
            className="card"
            href="#"
            style={{background: "url('https://images.unsplash.com/photo-1599481238789-da6cf5b4a8a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80')"}}
          >
            <div>
              <h1>Website Design</h1>
              <p className="service-desc">
                We can build an accessible and responsive website that suits your needs and reflects your brand at its finest.
              </p>
              {/* <div className="date">6 Oct 2017</div> */}
              <div className="tags">
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">Js</div>
                <div className="tag">UI/UX</div>
                <div className="tag">SEO</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <div className="num">02</div>
          <a
            className="card"
            href="#"
            style={{background: "url('https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')"}}
          >
            <div>
              <h1>Back End Development</h1>
              <p>For more complex solutions, we can create, manipulate and retrieve data through APIs gateways.</p>
              {/* <div className="date">9 Oct 2017</div> */}
              <div className="tags">
                <div className="tag">API</div>
                <div className="tag">Laravel</div>
                <div className="tag">Node.js</div>
                <div className="tag">SQL</div>
                <div className="tag">NoSQL</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
          <div className="num">03</div>
          <a
            className="card"
            href="#"
            style={{background: "url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1147&q=80')"}}
          >
            <div>
              <h1>Technology Consulting</h1>
              <p>Want to improve an existing solution ? Need some insights on the most appropriate tools to use ? We got you!</p>
              {/* <div className="date">14 Oct 2017</div> */}
              <div className="tags">
                <div className="tag">Vue</div>
                <div className="tag">Nuxt</div>
                <div className="tag">React</div>
                <div className="tag">Tailwind</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ModalView;

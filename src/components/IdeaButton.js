import React from "react";
import styled from "styled-components";
import IdeaImage from "../../src/images/idea.png";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "#00adb5" : "white")};
  color: ${(props) => (props.primary ? "white" : "#00adb5")};

  margin: 1em;
  padding: 0.25em 0.5em;
  border: 2px solid #00adb5;
  border-radius: 3px;
  position: absolute;
  left: 7%;
  top: 7%;
  z-index: 100;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    left: 0%;
  }
`;

const Img = styled.img`
  height: 48px;
`;

const IdeaButton = (props) => {
  if (props.primary) {
    return (
      <div>
        <Button primary onClick={props.showModal}>
          <Img src={IdeaImage} alt="idea bulb" />
        </Button>
      </div>
    );
  }
  return (
    <div>
      {/* <Button>Normal</Button>
      <Button primary>Primary</Button> */}
      <Button onClick={props.showModal}>
        <Img src={IdeaImage} alt="idea bulb" />
      </Button>
    </div>
  );
};

export default IdeaButton;

import React from "react";
import star from "../assets/icons/icon-star.svg";
import Accordion from "../components/Accordion/Accordion";
import { accordionInformation } from "../utils/constants";


const Home = () => {
  return (
    <main>
      <div className="accordion-container">
        <div className="accordion-title">
          <img className="title-icon" src={star} alt="star-icon" />
          <h1 className="title-name">FAQs</h1>
        </div>
        </div>
      {accordionInformation.map((element) => (
        <Accordion key={element.id} description={element} />
      ))}
    </main>
  );
};

export default Home;

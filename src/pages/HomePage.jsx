import React from "react";
import star from "../assets/icons/icon-star.svg";
import AccordionCard from "../components/Accordion/AccordionCard";
import { accordionInformation } from "../utils/constants";
import styles from '../components/Accordion/AccordionCard.module.css'


const Home = () => {
  return (
    <main>
      <div className={styles.accordion__container}>
        <div className={styles.accordion__head}>
          <img className={styles.accordion__logo} src={star} alt="star-icon" />
          <h1 className={styles.accordion__name}>FAQs</h1>
        </div>
        
      {accordionInformation.map((element) => (
        <AccordionCard key={element.id} description={element} />
      ))}
      </div>
    </main>
  );
};

export default Home;

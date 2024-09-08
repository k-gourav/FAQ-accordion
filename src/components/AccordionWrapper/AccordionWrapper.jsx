import star from "../../assets/icons/icon-star.svg";
import styles from "./AccordionWrapper.module.css";
import AccordionCard from "../Accordion/AccordionCard";
import { accordionInformation } from "../../utils/constants";

const AccordionWrapper = () => {
  return (
    <main className={styles.main__element}>
      <div className={styles.accordion__container}>
        <div className={styles.accordion__head}>
          <img className={styles.accordion__logo} src={star} alt="star-icon" />
          <h1 className={styles.accordion__name}>FAQs</h1>
        </div>

        <div className={styles.accordion_body}>
          {accordionInformation.map((element) => (
            <AccordionCard key={element.id} description={element} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AccordionWrapper;

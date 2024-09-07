import React from "react";
import styles from './AccordionCard.module.css'
import expandImg from '../../assets/icons/icon-plus.svg';
import collapseImg from '../../assets/icons/icon-minus.svg'


function AccordionCard({ description }) {
  return (
        <div className={styles.accordion__body}>
          <div className={styles.accordion__content}>
            <div className={styles.accordion__title}>
              <h3>{description.question}</h3>
              <button className={styles.accordion__btn}><img src={expandImg} alt="expand-icon" /></button>
            </div>
            <p className={styles.accordion__descript}>{description.answer}</p>
          </div>
        </div>
  );
}

export default AccordionCard;

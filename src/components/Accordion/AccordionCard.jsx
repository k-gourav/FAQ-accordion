import React, { useState } from "react";
import styles from "./AccordionCard.module.css";
import expandImg from "../../assets/icons/icon-plus.svg";
import collapseImg from "../../assets/icons/icon-minus.svg";

function AccordionCard({ description }) {
  const [expandContent, setExpandContent] = useState(false);

  return (
    <div className={styles.accordion__content}>
      <div className={styles.accordion__title}>
        <p className={styles.accordion_query}>{description.question}</p>
        <button
          onClick={() => setExpandContent(!expandContent)}
          className={styles.accordion__btn}
        >
          <img
            src={expandContent ? collapseImg : expandImg}
            alt={expandContent ? "collapse" : "expand"}
          />
        </button>
      </div>
      {expandContent ? (
        <p className={styles.accordion__descript}>{description.answer}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default AccordionCard;

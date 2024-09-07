import React from "react";
import expandImg from '../../assets/icons/icon-plus.svg';
import collapseImg from '../../assets/icons/icon-minus.svg'


function Accordion({ description }) {
  return (
        <div className="accordion-body">
          <div className="body-content">
            <div className="body-head">
              <h3>{description.question}</h3>
              <img src={expandImg} alt="expand-icon" />
            </div>
            <p className="body-tail">{description.answer}</p>
          </div>
        </div>
  );
}

export default Accordion;

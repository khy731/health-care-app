import { useState } from "react";

import classes from "./Accordion.module.css";
const Accordion = ({ title, content }) => {
  const [isCheck, setCheck] = useState(false);

  return (
    <>
      <div className={classes.all}>
        <div className={classes.main}>{title}</div>
        <button className={classes.controlbutton}
          onClick={() => {
            setCheck((e) => !e);
          }}
        >
          {isCheck ? "-" : "+"}
        </button>
      </div>
      {isCheck && (
        <ul className={classes.open}>
          {content.map((item, index) => (
            <li key={index}>
              <ul>
                <span>&nbsp;&nbsp;&nbsp;{item.res_date}</span>
                <span>&nbsp;&nbsp;&nbsp;{item.doctor_name}</span>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Accordion;
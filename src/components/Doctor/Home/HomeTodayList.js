import classes from "./HomeTodayList.module.css";

import { useState } from "react";
import Card from "../../UI/Card";
import PatientModal from "../Modal/PatientModal";

const HomeTodayList = ( {info} ) => {

    const [isShow, setIsShow] = useState(false);

    const toggleShow = () => {
        setIsShow(!isShow);
    }

    return(
        <Card>
        <div className={classes.listbox}>
          <div>
            <i className="fa-regular fa-user"></i>
            <span>&nbsp;&nbsp;&nbsp;{info.name}</span>
          </div>
            <span>{info.born}</span>
            <span>{info.phone}</span>
          <button className={classes.controlbutton}>환자 정보</button>
        </div>
        <button onClick={toggleShow}>환자 정보</button>
        {isShow && <PatientModal isOpen={isShow}/>}
        </Card>
    )
}

export default HomeTodayList;
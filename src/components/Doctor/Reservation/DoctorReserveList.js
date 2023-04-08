import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import PatientModal from "../Modal/PatientModal";

import classes from "./DoctorReserveList.module.css";
const DoctorReserveList = ({ data }) => {
  const timeData = [
    { num: 1, time: "09:00" },
    { num: 2, time: "09:30" },
    { num: 3, time: "10:00" },
    { num: 4, time: "10:30" },
    { num: 5, time: "14:00" },
    { num: 6, time: "14:30" },
    { num: 7, time: "15:00" },
    { num: 8, time: "15:30" },
  ];

  const [time, setTime] = useState("");
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
      setIsShow(!isShow);
  }

  useEffect(() => {
    const timeMatch = timeData.find((v) => v.num === data.res_time);
    setTime(timeMatch.time);
  }, [data.res_time]);

  return (
    <Card>
      <table>
      <tr className={classes.listbox}>
        <td className={classes.one}>
          <i className="fa-regular fa-clock"></i>
          <span>&nbsp;&nbsp;{time}</span>
        </td>
        <td className={classes.two}>
          <i className="fa-regular fa-user"></i>
          <span>&nbsp;&nbsp;{data.patient_id.name}</span>
        </td>
        <td className={classes.three}>
          <span className={classes.changecolor}>증상 :</span>
          <span>&nbsp;{data.contents}</span>
        </td>
        <button className={classes.controlbutton} onClick={toggleShow}>환자 정보</button>
        {isShow && <PatientModal isOpen={isShow}/>}
      </tr>
      </table>
      <div className={classes.bottom}/>
    </Card>
  );
};

export default DoctorReserveList;
import { useEffect, useState } from "react";
import Card from "../../UI/Card";

import classes from "./DoctorReserveList.module.css";
const DoctorReserveList = ({ data }) => {
  const timeData = [
    { num: 1, time: "9:00" },
    { num: 2, time: "9:30" },
    { num: 3, time: "10:00" },
    { num: 4, time: "10:30" },
    { num: 5, time: "14:00" },
    { num: 6, time: "14:30" },
    { num: 7, time: "15:00" },
    { num: 8, time: "15:30" },
  ];

  const [time, setTime] = useState("");

  useEffect(() => {
    const timeMatch = timeData.find((v) => v.num === data.res_time);
    setTime(timeMatch.time);
  }, [data.res_time]);

  const showPatientInfo = () => {
    console.log("환자 정보 버튼이 클릭되었습니다.");
  };

  return (
    <Card>
      <div className={classes.listbox}>
        <div>
          <i className="fa-regular fa-clock"></i>
          <span className={classes.info}>{time}</span>
        </div>
        <div>
        <i className="fa-regular fa-user"></i>
        <span className={classes.info}>{data.patient_id.name}</span>
        </div>
        <div>
        <span className={classes.changecolor}>증상 :</span>
        <span className={classes.info}>{data.contents}</span>
        </div>
        <button className={classes.controlbutton} onClick={showPatientInfo}>환자 정보</button>
      </div>
    </Card>
  );
};

export default DoctorReserveList;
import { useState } from "react";
import Card from "../../UI/Card";
import PatientInfoList from "./PatientInfoList";

import classes from "./DoctorPatientList.module.css";
const DoctorPatientList = ({ data, setSelected }) => {
    
  return (
    <div className={classes.treatlistbox}>
    <Card>
      <div className={classes.top}>환자 목록</div>
      <div className={classes.treatlist}>
        <div className={classes.inform}>
          <span>&nbsp;이름</span>
          <span>&nbsp;&nbsp;&nbsp;성별</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;생년월일</span>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전화번호</span>
          <span/>
          <span/>
          <span/>
        </div>
      {data.map((v, i) => (
        <PatientInfoList data={v} key={v.patient_id} onClick={()=>{setSelected(i)}} />
      ))}
      </div>
    </Card>
    </div>
  );
};

export default DoctorPatientList;

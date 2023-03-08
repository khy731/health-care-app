import { useState } from "react";
import Card from "../../UI/Card";
import PatientInfoList from "./PatientInfoList";

const DoctorPatientList = ({ data, setSelected }) => {
    
  return (
    <Card>
      <ul>
        <li>이름</li>
        <li>성별</li>
        <li>생년월일</li>
        <li>전화번호</li>
      </ul>
      {data.map((v, i) => (
        <PatientInfoList data={v} key={v.patient_id} onClick={()=>{setSelected(i)}} />
      ))}
    </Card>
  );
};

export default DoctorPatientList;

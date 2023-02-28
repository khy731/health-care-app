import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import TreatPatientInfo from "./TreatPatientInfo";

import classes from "./TreatPatientList.module.css";
const TreatPatientList = ({ setSelectedList, setSelectedTreat }) => {
  const [patientInfo, setPatientInfo] = useState([]);
  const [doctorId, setDoctorId] = useState("");

  useEffect(() => {
    const doctorIdFromSessionStorage = sessionStorage.getItem("doctor_id");
    if (doctorIdFromSessionStorage === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setDoctorId(doctorIdFromSessionStorage);
    }
  }, []);

  useEffect(() => {
    const fetchDiagnosisData = async () => {
      if (doctorId !== "") {
        const response = await fetch(
          `http://localhost:8080/doctor/${doctorId}/diagnosis`
        );
        if (response.ok) {
          const data = await response.json();
          if (data !== null && data !== undefined) {
            setPatientInfo(data.data);
          }
        }
      }
    };
  
    fetchDiagnosisData();
  }, [doctorId]);

  const handleSelectPatient = (patientId) => {
    setSelectedList(patientId);
    setSelectedTreat("");
  };


  return (
    <div className={classes.treatlistbox}>
    <Card>
      <div className={classes.top}>환자 목록</div>
      <div className={classes.treatlist}>
        <div className={classes.inform}>
          <span>이름</span>
          <span>성별</span>
          <span>생년월일</span>
          <span>전화번호</span>
        </div>
        {patientInfo.map((v) => (
        <TreatPatientInfo
          key={v.patient_id}
          data={v}
          handleSelectPatient={handleSelectPatient}/>
        ))}
      </div>
    </Card>
    </div>
  );
};

export default TreatPatientList;

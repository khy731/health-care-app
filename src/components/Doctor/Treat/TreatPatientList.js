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
        <table>
        <tr className={classes.inform}>
          <td className={classes.one}>이름</td>
          <td className={classes.two}>성별</td>
          <td className={classes.three}>생년월일</td>
          <td className={classes.four}>전화번호</td>
        </tr>
        </table>
        <div className={classes.bottom}/>
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

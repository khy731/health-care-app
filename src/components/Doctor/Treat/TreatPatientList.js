import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import TreatPatientInfo from "./TreatPatientInfo";

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
        const response = await fetch(`http://localhost:8080/doctor/${doctorId}/diagnosis`);
        if (response.ok) {
          const data = await response.json();
          if (data !== null && data !== undefined) {
            setPatientInfo(data);
          }
        }
      }
    };

    fetchDiagnosisData();
  }, [doctorId]);

  return (
    <Card>
      <div>
        <h2>환자 목록</h2>
      </div>
      <ul>
        <li>이름</li>
        <li>성별</li>
        <li>생년월일</li>
        <li>전화번호</li>
      </ul>
      {patientInfo.map((v) => (
        <TreatPatientInfo
          key={v.patient_id}
          data={v}
          setSelectedList={setSelectedList}
          setSelectedTreat={setSelectedTreat}
        />
      ))}
    </Card>
  );
};

export default TreatPatientList;

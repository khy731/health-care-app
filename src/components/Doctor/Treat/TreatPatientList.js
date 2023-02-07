import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import TreatPatientInfo from "./TreatPatientInfo";

const TreatPatientList = ({ setSelectedList, setSelectedTreat }) => {
  const [patientInfo, setPatientInfo] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("doctor_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("doctor_id"));
      const res = UseFetch(`http://localhost:8080/doctor/${id}/diagnosis`).data;
      if (res !== null && res !== undefined) {
        setPatientInfo(res);
      }
    }
  });

  return (
    <Card>
      <div>
        <h2>환자 목록</h2>
      </div>
      <ul>
        <li>이름</li>
        <li>성별</li>
        <li>나이(만)</li>
        <li>생년월일</li>
      </ul>
      {patientInfo.map((v) => (
        <TreatPatientInfo
          data={v}
          setSelectedList={setSelectedList}
          setSelectedTreat={setSelectedTreat}
        />
      ))}
    </Card>
  );
};

export default TreatPatientList;

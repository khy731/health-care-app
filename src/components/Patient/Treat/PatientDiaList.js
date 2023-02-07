import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import PatientDiaInfo from "./PatientDiaInfo";

const PatientDiaList = () => {
  const [treatData, setTreatData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("patient_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("patient_id"));
      const res = UseFetch(
        `http://localhost:8080/patient/${id}/diagnosis`
      ).data;
      if (res !== null && res !== undefined) {
        setTreatData(res);
      }
    }
  });

  return (
    <>
      <div>
        <h2>진료 내역</h2>
      </div>
      <Card>
        <ul>
          <li>진단 일시</li>
          <li>진단 내용(진단)</li>
          <li>병명</li>
          <li>처방명</li>
          <li>처방 내용</li>
          <li>일일 복용(회)</li>
          <li>총 복용(일)</li>
        </ul>
        {treatData.map((v) => (
          <PatientDiaInfo data={v} />
        ))}
      </Card>
    </>
  );
};

export default PatientDiaList;

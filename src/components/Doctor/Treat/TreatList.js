import { useEffect, useState } from "react";
import TreatInfo from "./TreatInfo";

const TreatList = ({ selectedList, setSelectedDiaNum }) => {
  const [doctorId, setDoctorId] = useState("");
  const [treatData, setTreatData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("doctor_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setDoctorId(getItem("doctor_id"));
      fetch("http://localhost:8080/doctor/diagnosis/detail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            doctor_id: doctorId,
            patient_id: selectedList,
          },
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.result === "OK") {
            setTreatData(response.data);
          }
          if (response.result === "Fail") {
            alert(response.content);
          } else {
            alert("진료 내역 정보가 없습니다.");
          }
        });
    }
  });

  return (
    <Card>
      <div>
        <h2>진로 내역</h2>
      </div>
      <ul>
        <li>진단 일시</li>
        <li>증상</li>
        <li>병명</li>
        <li>처방</li>
      </ul>
      {treatData.map((v) => (
        <TreatInfo data={v} setSelectedDiaNum={setSelectedDiaNum} />
      ))}
    </Card>
  );
};

export default TreatList;

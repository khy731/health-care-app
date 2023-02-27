import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import TreatInfo from "./TreatInfo";

const TreatList = ({ selectedList, setSelectedDiaNum }) => {
  const [doctorId, setDoctorId] = useState("");
  const [treatData, setTreatData] = useState([]);
  useEffect(() => {
    async function fetchTreatData() {
      try {
        if (sessionStorage.getItem("doctor_id") === null) {
          console.log("회원 정보가 없습니다. 로그인하세요");
        } else {
          setDoctorId(sessionStorage.getItem("doctor_id"));
          const response = await fetch(
            "http://localhost:8080/doctor/diagnosis/detail",
            {
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
            }
          );
          const data = await response.json();
          console.log(data);
          if (data.result === "OK") {
            setTreatData(data.data);
          } else {
            alert(data.content);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchTreatData();
  }, [selectedList]);

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
        <TreatInfo key={v.dia_num} data={v} setSelectedDiaNum={setSelectedDiaNum} />
      ))}
    </Card>
  );
};

export default TreatList;

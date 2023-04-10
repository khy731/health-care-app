import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import TreatInfo from "./TreatInfo";

import classes from "./TreatList.module.css";
const TreatList = ({ selectedList, setSelectedDiaNum }) => {
  const [doctorId, setDoctorId] = useState("");
  const [treatData, setTreatData] = useState([]);

  useEffect(() => {
    async function fetchTreatData() {
      try {
        const id = sessionStorage.getItem("doctor_id");
        if (id === null) {
          console.log("회원 정보가 없습니다. 로그인하세요");
        } else {
          setDoctorId(id);
          const response = await fetch(
            "http://localhost:8080/doctor/diagnosis/detail",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                data: {
                  doctor_id: id,
                  patient_id: selectedList,
                },
              }),
            }
          );
          const data = await response.json();
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
    <div className={classes.listbox}>
    <Card>
    <div className={classes.top}>진료 내역</div>
      <div className={classes.listsmallbox}>
      <table>
        <tr className={classes.inform}>
          <td className={classes.one}>진단 일시</td>
          <td className={classes.one}>증상</td>
          <td className={classes.one}>병명</td>
          <td className={classes.one}>처방</td>
        </tr>
      </table>
      <div className={classes.bottom}/>
      {treatData.map((v) => (
        <TreatInfo key={v.dia_num} data={v} setSelectedDiaNum={setSelectedDiaNum} />
      ))}
      </div>
    </Card>
    </div>
  );
};

export default TreatList;

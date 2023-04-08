import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import PatientPreInfo from "./PatientPreInfo";

import classes from "./PatientPreList.module.css";
const PatientDiaList = () => {
  const [treatData, setTreatData] = useState([]);
  const [id, setId] = useState("");

  useEffect(() => {
    const patientId = sessionStorage.getItem("patient_id");
    if (!patientId) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
      return;
    }
    setId(patientId);
  }, []);

  useEffect(() => {
    async function fetchTreatData() {
      try {
        if (id) {
          const response = await fetch(
            `http://localhost:8080/patient/${id}/diagnosis`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (data !== null && data !== undefined) {
            setTreatData(data.data.diagnosis_list);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchTreatData();
  }, [id]);

  return (
    <div className={classes.diabox}>
      <Card>
      <div className={classes.top}>처방 내역</div>
      <div className={classes.diasmallbox}>
        <table>
        <tr className={classes.inform}>
          <td className={classes.one}>처방명</td>
          <td className={classes.one}>처방 내용</td>
          <td className={classes.one}>일일 복용(회)</td>
          <td className={classes.one}>총 복용(일)</td>
        </tr>
        </table>
        <div className={classes.bottom}/>
        {treatData.map((v) => (
          <PatientPreInfo key={v.dia_num} data={v} />
        ))}
        </div>
      </Card>
    </div>
  );
};

export default PatientDiaList;

import { useEffect, useState } from "react";
import Card from "../../UI/Card";
import PatientDiaInfo from "./PatientDiaInfo";

import classes from "./PatientDiaList.module.css";
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
      <div className={classes.top}>진단 내역</div>
      <div className={classes.diasmallbox}>
        <table>
        <tr className={classes.inform}>
          <td className={classes.one}>진단 일시</td>
          <td className={classes.one}>진단 내용(증상)</td>
          <td className={classes.one}>병명</td>
        </tr>
        </table>
        <div className={classes.bottom}/>
        {treatData.map((v) => (
          <PatientDiaInfo key={v.dia_num} data={v} />
        ))}
        </div>
      </Card>
    </div>
  );
};

export default PatientDiaList;
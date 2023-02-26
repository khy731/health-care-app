import { useEffect, useState } from "react";
import Card from "../../UI/Card";

const DoctorReserveList = ({ data }) => {
  const timeData = [
    { num: 1, time: "9:00" },
    { num: 2, time: "9:30" },
    { num: 3, time: "10:00" },
    { num: 4, time: "10:30" },
    { num: 5, time: "14:00" },
    { num: 6, time: "14:30" },
    { num: 7, time: "15:00" },
    { num: 8, time: "15:30" },
  ];

  const [time, setTime] = useState("");

  useEffect(() => {
    const timeMatch = timeData.find((v) => v.num === data.res_time);
    setTime(timeMatch.time);
  }, [data.res_time]);

  const showPatientInfo = () => {
    console.log("환자 정보 버튼이 클릭되었습니다.");
  };

  return (
    <Card>
      <ul>
        <li>{time}</li>
        <li>{data.patient_id.name}</li>
        <li>{data.contents}</li>
      </ul>
      <button onClick={showPatientInfo}>환자 정보</button>
    </Card>
  );
};

export default DoctorReserveList;

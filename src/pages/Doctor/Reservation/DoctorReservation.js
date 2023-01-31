import { useEffect, useState } from "react";
import DoctorReserveInfo from "../../../components/Doctor/Reservation/DoctorReserveInfo";
import TodayReserve from "../../../components/Doctor/Reservation/TodayReserve";
import DoctorHeader from "../../../components/Header/DoctorHeader";
import UseFetch from "../../../Hook/UseFetch";

const DoctorReservation = () => {
  const [id, setId] = useState("");
  const [reserveData, setReserveData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("doctor_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("doctor_id"));
    }
    const res = UseFetch(`http://localhost:8080/doctor/${id}/reservation`).data;
    if (res !== null && res !== undefined) {
      setReserveData(res);
    }
  });
  const date = new Date();

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const todayDate = year + '/' + month + '/' + day;
  console.log(todayDate);

  const todayReserve = reserveData.filter((v) => v.res_date === todayDate);

  const dummy = [
    {res_time: 1}
  ]

  return (
    <>
      <DoctorHeader />
      <TodayReserve data={todayReserve} />
      <DoctorReserveInfo data={reserveData} />
    </>
  );
};

export default DoctorReservation;

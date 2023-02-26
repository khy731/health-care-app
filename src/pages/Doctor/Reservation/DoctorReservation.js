import { useEffect, useState } from "react";
import DoctorReserveInfo from "../../../components/Doctor/Reservation/DoctorReserveInfo";
import TodayReserve from "../../../components/Doctor/Reservation/TodayReserve";
import DoctorHeader from "../../../components/Header/DoctorHeader";

const DoctorReservation = () => {
  const [id, setId] = useState("");
  const [reserveData, setReserveData] = useState([]);
  const [todayData, setTodayData] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("doctor_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("doctor_id"));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/doctor/${id}/reservation`);
        const data = await res.json();
        setReserveData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const todayDate = `${year}/${month}/${day}`;

  useEffect(() => {
    const todayReserve = reserveData.filter((v) => v.res_date === todayDate);
    setTodayData(todayReserve);
  }, [reserveData, todayDate]);

  return (
    <>
      <DoctorHeader />
      <TodayReserve data={todayData} />
      <DoctorReserveInfo data={reserveData} />
    </>
  );
};

export default DoctorReservation;

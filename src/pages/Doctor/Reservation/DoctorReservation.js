import { useEffect, useState } from "react";
import DoctorReserveInfo from "../../../components/Doctor/Reservation/DoctorReserveInfo";
import TodayReserve from "../../../components/Doctor/Reservation/TodayReserve";
import DoctorHeader from "../../../components/Header/DoctorHeader";

import classes from './DoctorReservation.module.css';
const DoctorReservation = () => {
  const [id, setId] = useState("");
  const [reserveData, setReserveData] = useState([]);
  const [todayData, setTodayData] = useState([]);

  useEffect(() => {
    const doctorId = sessionStorage.getItem("doctor_id");
    if (doctorId === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(doctorId);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/doctor/${id}/reservation`);
        const data = await res.json();
        setReserveData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      fetchData();
    }
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
      <div className={classes.mainbox}>
        <div className={classes.positionchange}>
          <TodayReserve data={todayData} />
          <DoctorReserveInfo data={reserveData} />
        </div>
      </div>
    </>
  );
};

export default DoctorReservation;
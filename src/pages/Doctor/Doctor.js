import { useEffect, useState } from "react";
import DoctorPatientList from "../../components/Doctor/Home/DoctorPatientList";
import HomeToday from "../../components/Doctor/Home/HomeToday";
import TodayReserve from "../../components/Doctor/Reservation/TodayReserve";
import DoctorHeader from "../../components/Header/DoctorHeader";

//import classes from './Doctor.module.css';
const Doctor = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [id, setId] = useState(null);
  const [doctorData, setDoctorData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("doctor_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("doctor_id"));
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        if (id === null) {
          return;
        }
        const res = await fetch(`http://localhost:8080/doctor/${id}`);
        const data = await res.json();

        if (data !== null && data !== undefined) {
          setIsLogin(true);
          setDoctorData({
            name: data.data.name,
            email: data.data.email,
            major: data.data.major,
            code: data.data.code,
            patientInfo: data.data.patient_id,
            reserve: [
              {
                contents: "복통",
                res_time: "10:00",
                sel_doctor_id: "khy731",
                name: "환자1",
                born: "2001.07.31",
                phone: "010-7727-1321"
              },{
                contents: "두통",
                res_time: "14:00",
                sel_doctor_id: "khy731",
                name: "환자2",
                born: "2004.01.31",
                phone: "010-1111-1321"
              },
            ],
          });
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);


  return (
    <>
      <DoctorHeader />
      <div>
        {doctorData.reserve && (
          <div>
            <h2>금일 예약</h2>
            <HomeToday data={doctorData.reserve} />
          </div>
        )}
        {doctorData.patientInfo && (
          <div>
            <h2>환자 목록</h2>
            <DoctorPatientList data={doctorData.patientInfo} />
          </div>
        )}
        <div>
          <h2>상세 정보</h2>
          <div>content</div>
        </div>
      </div>
    </>
  );
};

export default Doctor;

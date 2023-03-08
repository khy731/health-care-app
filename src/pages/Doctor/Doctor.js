import { useEffect, useState } from "react";
import DetailInfo from "../../components/Doctor/Home/DetailInfo";
import DoctorPatientList from "../../components/Doctor/Home/DoctorPatientList";
import HomeToday from "../../components/Doctor/Home/HomeToday";
import TodayReserve from "../../components/Doctor/Reservation/TodayReserve";
import DoctorHeader from "../../components/Header/DoctorHeader";

import classes from './Doctor.module.css';
const Doctor = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [id, setId] = useState(null);
  const [doctorData, setDoctorData] = useState({});
  const [selected, setSelected] = useState('');

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
          console.log(data);
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
      <div className={classes.mainbox}>
        <div className={classes.positionchange}>
          <div className={classes.column}>
          {doctorData.reserve && (
            <div>
              <HomeToday data={doctorData.reserve} />
            </div>
          )}
          {doctorData.patientInfo && (
            <div>
              <DoctorPatientList data={doctorData.patientInfo} setSelected={setSelected} />
            </div>
          )}
          </div>
        {doctorData.patientInfo && (
          <div>
            <DetailInfo data={doctorData.patientInfo} selected={selected} />
          </div>
        )}
        </div>
      </div>
    </>
  );
};

export default Doctor;

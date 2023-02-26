import { useEffect, useState } from "react";
import DoctorPatientList from "../../components/Doctor/Home/DoctorPatientList";
import TodayReserve from "../../components/Doctor/Reservation/TodayReserve";
import DoctorHeader from "../../components/Header/DoctorHeader";

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
            name: data.name,
            email: data.email,
            major: data.major,
            code: data.code,
            patientInfo: data.patient_id,
            reserve: data.today_res_list, 
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
            <TodayReserve data={doctorData.reserve} />
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

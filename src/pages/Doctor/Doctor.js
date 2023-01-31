import { useEffect, useState } from "react";
import DoctorHeader from "../../components/Header/DoctorHeader";
import UseFetch from "../../Hook/UseFetch";

const Doctor = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [id, setId] = useState("");
  const [doctorData, setDoctorData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("doctor_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("doctor_id"));
      const res = UseFetch(`http://localhost:8080/doctor/${id}`).data;
      if (res !== null && res !== undefined) {
        setIsLogin(true);
        setDoctorData({
          name: res.name,
          email: res.email,
          major: res.major,
          code: res.code,
          patientInfo: res.patient_id,
        });
      }
    }
  });

  console.log(doctorData);

  return (
    <>
      <DoctorHeader />
      <div>
        <div>
          <h2>금일 예약</h2>
          <div>content</div>
        </div>
        <div>
          <h2>환자 목록</h2>
          <div>content</div>
        </div>
        <div>
            <h2>상세 정보</h2>
            <div>content</div>
        </div>
      </div>
    </>
  );
};

export default Doctor;

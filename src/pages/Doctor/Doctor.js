import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DoctorPatientInfo from "../../components/Doctor/DoctorPatientInfo";
import DoctorPatientList from "../../components/Doctor/DoctorPatientList";
import DoctorReserveList from "../../components/Doctor/DotorReserveList";
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
            patientInfo: res.patient_id
        });
      }
    }
  });

  console.log(doctorData);

/*   <DoctorPatientList patientData={doctorData.patientInfo} />
  <DoctorReserveList />
  <DoctorPatientInfo /> */

  return (
    <>
      <div>
        <Link to="/doctor/login">로그인</Link>
        <Link to="/doctor/signup">회원가입</Link>
        <Link to="/doctor/code">코드 발급받기</Link>
      </div>
      <div>

      </div>
    </>
  );
};

export default Doctor;

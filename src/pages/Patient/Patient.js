import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PatientHeader from "../../components/Header/PatientHeader";
import UseFetch from "../../Hook/UseFetch";

const Patient = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [id, setId] = useState("");
  const [patientData, setPatientData] = useState({});

  useEffect(() => {
    if (sessionStorage.getItem("patient_id") === null) {
      console.log("회원 정보가 없습니다. 로그인하세요.");
    } else {
      setId(sessionStorage.getItem("patient_id"));
      const res = UseFetch(`http://localhost:8080/patient/${id}`).data;
      if (res !== null && res !== undefined) {
        setIsLogin(true);
        setPatientData({
          name: res.name,
          email: res.email,
          code: res.code,
          // 환자 홈 만든 후 추가
        });
      }
    }
  });

  console.log(patientData);

  return (
    <>
      <PatientHeader />
      <div>
        <div>
          <h2>연결된 의사 목록</h2>
          <div>content</div>
        </div>
        <div>
          <h2>약 정보</h2>
          <div>content</div>
        </div>
        <div>
            <h2>건강 데이터</h2>
            <div>content</div>
        </div>
        <div>
            <h2>예약 정보</h2>
            <div>content</div>
        </div>
      </div>
    </>
  );
};

export default Patient;

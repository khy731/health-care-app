import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    

    return(
        <div>
            {isLogin && <>{patientData.name}님, 환영합니다!</>}
            <Link to="/patient/login">로그인</Link>
            <Link to="/patient/signup">회원가입</Link>
            <Link to="/patient/code">코드 매칭하기</Link>
        </div>
    )
}

export default Patient;
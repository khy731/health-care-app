import { Link } from "react-router-dom";
import DoctorSignup from "./DoctorSignup";
import PatientSignup from "./PatientSignup";

const Signup = () => {
  return (
    <div className="signup">
        <h2>회원 유형 선택</h2>
        <div>
          <Link to="/signup/doctor">의사</Link>
          <Link to="/signup/patient">환자</Link>
        </div>
    </div>
  );
};

export default Signup;

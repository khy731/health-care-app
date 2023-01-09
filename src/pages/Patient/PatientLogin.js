import { Link } from "react-router-dom";
import UserLogin from "../../components/UserInfo/UserLogin/UserLogin";

const PatientLogin = () => {
  return (
    <div>
      <UserLogin type="patient" />
      <div>
        <Link to="/patient/signup">회원가입하러 가기</Link>
      </div>
    </div>
  );
};

export default PatientLogin;

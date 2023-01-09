import { Link } from "react-router-dom";
import UserLogin from "../../components/UserInfo/UserLogin/UserLogin";

const DoctorLogin = () => {
  return (
    <div>
      <UserLogin type="doctor"/>
      <div>
        <Link to="/doctor/signup">회원가입하러 가기</Link>
      </div>
    </div>
  );
};

export default DoctorLogin;

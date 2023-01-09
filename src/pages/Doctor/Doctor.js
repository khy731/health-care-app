import { Link } from "react-router-dom";

const Doctor = () => {
    return(
        <div>
            <Link to="/doctor/login">로그인</Link>
            <Link to="/doctor/signup">회원가입</Link>
            <Link to="/doctor/code">코드 발급받기</Link>
        </div>
    )
}

export default Doctor;
import { Link } from "react-router-dom";

const Patient = () => {
    return(
        <div>
            <Link to="/patient/login">로그인</Link>
            <Link to="/patient/signup">회원가입</Link>
            <Link to="/patient/code">코드 매칭하기</Link>
        </div>
    )
}

export default Patient;
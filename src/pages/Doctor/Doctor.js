import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseFetch from "../../Hook/UseFetch"; 

const Doctor = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
 
    useEffect(() => {
      if(sessionStorage.getItem('user_id') === null){
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
        console.log('회원 정보가 없습니다. 로그인하세요.');
      } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
        setId(sessionStorage.getItem('user_id'));
        const res = UseFetch(`http://localhost:3000/doctor/${id}`);
        setName(res.data.name);
        setIsLogin(true);
        console.log(`${name}님, 환영합니다!`);
      }
    });
    
    return(
        <div>
            {isLogin && <>로그인 성공!</>}
            <Link to="/doctor/login">로그인</Link>
            <Link to="/doctor/signup">회원가입</Link>
            <Link to="/doctor/code">코드 발급받기</Link>
        </div>
    );
}

export default Doctor;
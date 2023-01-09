import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>회원 유형을 선택하세요.</h2>
      <Link to="/doctor">의사</Link>
      <Link to="/patient">환자</Link>
    </div>
  );
};

export default Welcome;

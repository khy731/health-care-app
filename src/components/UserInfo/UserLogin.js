import { Link } from 'react-router-dom';

const UserLogin = () => {
  return (
    <div>
      <form>
        <div>로그인</div>
        <div>
          <label>아이디</label>
          <input type="email" />
        </div>
        <div>
          <label>비밀번호</label>
          <input type="password" />
        </div>
        <div>
          <button type="submit">로그인</button>
          <button type="reset">취소</button>
        </div>
        <div>
          <Link to="/signup">회원가입하러 가기</Link>
        </div>
      </form>
    </div>
  );
};

export default UserLogin;

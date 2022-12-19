const Login = () => {
  return (
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
        <button>회원가입하러 가기</button>
      </div>
    </form>
  );
};

export default Login;

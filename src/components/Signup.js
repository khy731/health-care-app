const Signup = () => {
  return (
    <form>
      <label>회원 유형 선택</label>
      <div>
        <span>의사</span>
        <span>환자</span>
      </div>
      <div>
        <label>이름</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label>생년월일</label>
        <input type="date" id="birth" />
      </div>
      <div>
        <label>휴대전화</label>
        <input
          type="tel"
          id="tel"
          placeholder="010-0000-0000"
          pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
          maxlength="13"
        />
      </div>
      <div>
        <label>이메일(아이디)</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label>비밀번호</label>
        <input type="password" id="password" />
      </div>
      <div>
        <button type="submit">회원가입</button>
        <button type="reset">취소</button>
      </div>
    </form>
  );
};

export default Signup;

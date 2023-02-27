import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/UI/Button";

import classes from "./DoctorSignup.module.css";
const DoctorSignup = () => {
    //휴대전화
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    console.log(id, name, phone, major, email, password, gender);

    fetch("http://localhost:8080/doctor/signup", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data : {
            doctor_id: id,
            name: name,
            gender: gender,
            email: email,
            password: password,
            phone: phone,
            major: major,
            code: null
        }
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.result === "OK") {
          alert("회원가입 성공!");
          navigate('/doctor');
        }
        if (response.result === "Fail") {
          alert(response.content);
        }
        else {
            alert('잘못된 시도입니다');
        }
      });
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };
  const onChangePasswordChk = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPasswordError(e.target.value !== password);
    setPasswordCheck(e.target.value);
  };

  const cancleHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <br/>
      <img src={require("../../../components/Header/logo.png")} 
      alt="logo" width={280}/>
      <br/><br/>
    <div className={classes.signupbox}>
    <form onSubmit={onSubmit} autocomplete="off">
      <div className={classes.control}>
        <label htmlFor="id">아이디</label>
        <input name="id" type="text" value={id} onChange={onChangeId} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">비밀번호</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="password-check">비밀번호 확인</label>
        <input
          name="password-check"
          type="password"
          value={passwordCheck}
          onChange={onChangePasswordChk}
        />
        {passwordError && (
          <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="name">이름</label>
        <input name="name" type="text" value={name} onChange={onChangeName} />
      </div>
      <div className={classes.control}>
        <label htmlFor="gender">성별</label>
        <select name="gender" value={gender} onChange={onChangeGender}>
          <option disabled selected value="">성별</option>
          <option value="female">여자</option>
          <option value="male">남자</option>
        </select>
      </div>
      <div className={classes.control}>
      <label htmlFor="major">전공</label>
      <input name="major" type="text" value={major} onChange={onChangeMajor} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">이메일</label>
        <input name="email" type="email" value={email} onChange={onChangeEmail} />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">휴대전화</label>
        <input name="phone" type="tel" value={phone} onChange={onChangePhone} />
      </div>
      <br/>
      <div>
        <Button className={classes.controlbutton} type="submit" htmlType="submit" onClick={onSubmit}>
          계정 생성
        </Button>
      </div>
      <div className={classes.signupbottom}>
      <span className={classes.cancel} onClick={cancleHandler}>
             CANCEL
      </span>
      </div>
    </form>
    </div>
    </div>
  );
};

export default DoctorSignup;

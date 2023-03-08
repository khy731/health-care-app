import React from "react";
import { useNavigate } from "react-router-dom";

import classes from "./DoctorDropDown.module.css";
const DoctorDropDown = ({ toggleMenu }) => {
  const navigate = useNavigate();

  const toHomeHandler = () => {
    sessionStorage.removeItem("doctor_id");
    toggleMenu();
    navigate("/");
  };

  const toLoginHandler = () => {
    toggleMenu();
    navigate("/doctor/login");
  };

  const toSignupHandler = () => {
    toggleMenu();
    navigate("/doctor/Signup");
  };

  return (
      <div className={classes.dropdown}>
        <div className={classes.dropdowncontent}>
          <div className={classes.content} onClick={toLoginHandler}>로그인</div>
          <div className={classes.content} onClick={toSignupHandler}>회원가입</div>
          <div className={classes.content} onClick={toHomeHandler}>로그아웃</div>
        </div>
      </div>
  );
};

export default DoctorDropDown;

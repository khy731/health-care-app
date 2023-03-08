import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <ul onClick={toggleMenu}>
        <li onClick={toLoginHandler}>로그인</li>
        <li onClick={toSignupHandler}>회원가입</li>
        <li onClick={toHomeHandler}>로그아웃</li>
      </ul>
    </div>
  );
};

export default DoctorDropDown;

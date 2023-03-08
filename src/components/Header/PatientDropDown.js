import React from "react";
import { useNavigate } from "react-router-dom";

const PatientDropDown = ({ toggleMenu }) => {
  const navigate = useNavigate();

  const toHomeHandler = () => {
    sessionStorage.removeItem("patient_id");
    toggleMenu();
    navigate("/");
  };

  const toLoginHandler = () => {
    toggleMenu();
    navigate("/patient/login");
  };

  const toSignupHandler = () => {
    toggleMenu();
    navigate("/patient/Signup");
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

export default PatientDropDown;

import React, { useState, useEffect, useReducer } from "react";
import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Button";

import classes from "./DoctorLogin.module.css";
import { useNavigate, Link } from "react-router-dom";

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 4 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 4 };
  }
  return { value: "", isValid: false };
};

const DoctorLogin = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [id, setId] = useState("");

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const navigate = useNavigate();

  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [passwordIsValid]);

  const idChangeHandler = e => {
    setId(e.target.value);
  }

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitLogin = async () => {
    const res = await fetch(`http://localhost:8080/doctor/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
            doctor_id: id,
            password: passwordState.value
        }
      }),
    }) // API 주소 입력
    .then((res) => res.json());
  if (res.result === "OK") {
      sessionStorage.setItem("doctor_id", id);
      navigate("/doctor");
  }
  if (res.result === "Fail") {
      alert(res.content);
  }
  };

  const cancleHandler = () => {
    navigate(-1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    submitLogin();
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={classes.control}
        >
          <label htmlFor="id">ID</label>
          <input
            type="id"
            id="id"
            value={id}
            onChange={idChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
          <Button className={classes.cancel} onClick={cancleHandler}>
            Cancel
          </Button>
        </div>
        <div>
        <Link to="/doctor/signup">회원가입하러 가기</Link>
      </div>
      </form>
    </Card>
  );
};

export default DoctorLogin;

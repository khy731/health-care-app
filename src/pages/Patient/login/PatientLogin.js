import React, { useState, useEffect, useReducer } from "react";
import Card from "../../../components/UI/Card";
import Button from "../../../components/UI/Button";

import classes from "./PatientLogin.module.css";
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

const PatientLogin = (props) => {
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
    const res = await fetch(`http://localhost:8080/patient/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
            patient_id: id,
            password: passwordState.value
        }
      }),
    }) // API 주소 입력
      .then((res) => res.json());
    if (res.result === "OK") {
        sessionStorage.setItem("patient_id", id);
        navigate("/patient");
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
    <div>
      <br/><br/>
      <img src={require("../../../components/Header/logo.png")} 
      alt="logo" width={280}/>
    <Card className={classes.login}>
      <form onSubmit={submitHandler} autoComplete="off">
        <div className={classes.logintop}>PATIENT</div>
        <div
          className={classes.control}
        >
          <label htmlFor="id"></label>
          <input
            type="id"
            id="id"
            value={id}
            onChange={idChangeHandler}
            placeholder="ID"
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            placeholder="Password"
          />
        </div>
        <div>
          <Button type="submit" disabled={!formIsValid}>
            LOGIN
          </Button>
        </div>
        <br></br>
        <div className={classes.loginbottom}>
          <span className={classes.signup}>
            <Link to="/patient/signup">SIGN UP</Link>
          </span>
          <span className={classes.cancel} onClick={cancleHandler}>
             CANCEL
          </span>
        </div>
      </form>
    </Card>
    </div>
  );
};

export default PatientLogin;
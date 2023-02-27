import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
    <br/><br/>
    <img src={require("../components/Header/logo.png")} 
    alt="logo" width={380}/>
    <br/><br/>
    <div className={classes.choosebox}>
      <div className={classes.choose}>회원 유형을 선택하세요.</div>
      <Link to="/doctor">
        <div className={classes.doctorbox}>
          <i className="fa-solid fa-stethoscope"></i>
          <br/>
          의사
        </div>
      </Link>
      <Link to="/patient">
        <div className={classes.patientbox}> 
          <i className="fa-solid fa-user"></i>
          <br/>
          환자
        </div>
      </Link>
    </div>
    </div>
  );
};

export default Welcome;
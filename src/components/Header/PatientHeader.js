import { useNavigate } from "react-router-dom";

import classes from "./PatientHeader.module.css";
const PatientHeader = ( ) => {
    const navigate = useNavigate();

    const toHomeHandler = () => {
        navigate('/');
    }

    const toReserveHandler = () => {
        navigate('/patient/reservation');
    }

    const toTreatHandler = () => {
        navigate('/patient/treat');
    }

    const toChatHandler = () => {
        navigate('/patient/chat');
    }

    const toSenserHandler = () => {
        navigate('/patient/senser');
    }

    const toCodeHandler = () => {
        navigate("/patient/code");
    }

    return(
        <div className={classes.header}>
            <div className={classes.mainlogo} onClick={toHomeHandler}>
                <img src={require("./logo.png")} 
                alt="logo" width={190}/>
            </div>
            <div className={classes.headerlist}>
                <nav>
                    <ul>
                        <li onClick={toTreatHandler}>진단 내역</li>
                        <li onClick={toReserveHandler}>진료 예약</li>
                        <li onClick={toChatHandler}>채팅</li>
                        <li onClick={toSenserHandler}>센서 기록</li>
                        <li onClick={toCodeHandler}>코드 발급</li>
                    </ul>
                </nav>
            </div>
            <div className={classes.mypage}>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    )
}

export default PatientHeader;
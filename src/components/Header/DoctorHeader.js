import { useNavigate } from "react-router-dom";

import classes from "./DoctorHeader.module.css";
const DoctorHeader = ( ) => {
    const navigate = useNavigate();

    const toHomeHandler = () => {
        navigate('/');
    }

    const toReserveHandler = () => {
        navigate('/doctor/reservation');
    }

    const toTreatHandler = () => {
        navigate('/doctor/treat');
    }

    const toVirtualHandler = () => {
        navigate('/doctor/virtualtreat');
    }

    const toCodeHandler = () => {
        navigate("/doctor/code");
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
                        <li onClick={toTreatHandler}>진단하기</li>
                        <li onClick={toReserveHandler}>진료 예약</li>
                        <li onClick={toVirtualHandler}>비대면 진료</li>
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

export default DoctorHeader;
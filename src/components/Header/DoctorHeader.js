import { useNavigate } from "react-router-dom";

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

    const toChatHandler = () => {
        navigate('/doctor/chat');
    }

    const toCodeHandler = () => {
        navigate("/doctor/code");
    }

    return(
        <div>
            <div onClick={toHomeHandler}>
                로고 자리
            </div>
            <nav>
                <ul>
                    <li onClick={toTreatHandler}>진단하기</li>
                    <li onClick={toReserveHandler}>진료 예약</li>
                    <li onClick={toChatHandler}>채팅</li>
                    <li onClick={toCodeHandler}>코드 발급</li>
                </ul>
            </nav>
            <div>
                마이페이지
            </div>
        </div>
    )
}

export default DoctorHeader;
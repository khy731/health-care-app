import { useNavigate } from "react-router-dom";

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
        <div>
            <div onClick={toHomeHandler}>
                로고 자리
            </div>
            <nav>
                <ul>
                    <li onClick={toTreatHandler}>진단하기</li>
                    <li onClick={toReserveHandler}>진료 예약</li>
                    <li onClick={toChatHandler}>채팅</li>
                    <li onClick={toSenserHandler}>센서 기록</li>
                    <li onClick={toCodeHandler}>코드 발급</li>
                </ul>
            </nav>
            <div>
                마이페이지
            </div>
        </div>
    )
}

export default PatientHeader;
import ReserveInfoList from "./ReserveInfoList";

const DoctorReserveInfo = ( props) => {
    return (
        <>
        <div>
            <label>날짜를 선택하세요.</label>
            <input type="date" />
        </div>
            <ReserveInfoList />
        </>
    )
}

export default DoctorReserveInfo;
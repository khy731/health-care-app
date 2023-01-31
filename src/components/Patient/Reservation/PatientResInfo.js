const PatientResInfo = ( {data} ) => {
    return (
        <>
        <h4>금일 {data.length}개의 예약이 있습니다.</h4>
        <ul>
            {data.map(v=> {
                <>
                    <li>{v.res_date}</li>
                    <li>{v.res_time}</li>
                    <li>{v.doctor_name}</li>
                    <button>예약 취소하기</button>
                </>
            })}
        </ul>
        </>
    )
}

export default PatientResInfo;
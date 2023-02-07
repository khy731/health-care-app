const PatientDiaInfo = ( {data} ) => {

    // 처방부분 수정필요 (figma도 수정해야하)

    return (
        <ul>
            <li>{data.dia_date}</li>
            <li>{data.dia_contents}</li>
            <li>{data.disease}</li>
            <li>{data.prescription_list.pre_name}</li>
            <li>{data.prescription_list.pre_contents}</li>
            <li>{data.prescription_list.one_day}</li>
            <li>{data.prescription_list.total}</li>
        </ul>
    )
}

export default PatientDiaInfo;